import { Server, Socket } from 'socket.io';
import API from '../../api';
import genUsername from '../../utils/genUsername';
import { UserType } from '../../types';

type SocketQuery = {
  username: string | null;
};

const handleUsername = async (
  queryUsername: string | null,
  socket: Socket,
  api: API,
): Promise<string> => {
  if (queryUsername) {
    const user = await api.database.selectUserByUsername(queryUsername);
    if (user) return user.username;
  }

  // Generates new username and inserts new user to the database
  const username = genUsername(10);
  await api.database.createUser({ username, avatar: 'default.png', status: 'Lorem' });
  socket.emit('set username', username);
  return username;
};

const formInterlocutors = (
  users: Array<UserType>,
  onlineUsers: Map<string, string>,
  username: string,
) => {
  return users
    .filter((user) => user.username !== username)
    .map((user) => {
      const isOnline = onlineUsers.has(user.username);
      return { ...user, isOnline };
    });
};

export const broadcastInterlocutors = (
  io: Server,
  users: Array<UserType>,
  onlineUsers: Map<string, string>,
) => {
  const onlineUsersUsernames = Array.from(onlineUsers.keys());

  onlineUsersUsernames.forEach((username) => {
    // Filter from own username and set online statuses
    const interlocutors = formInterlocutors(users, onlineUsers, username);

    // Update interlocutors of every online user
    const socketId = onlineUsers.get(username) as string;
    io.to(socketId).emit('set interlocutors', interlocutors);
  });
};

const onConnection = async (
  io: Server,
  socket: Socket,
  api: API,
  onlineUsers: Map<string, string>,
): Promise<string> => {
  // Get username from local storage
  const queryUsername = (socket.handshake.query as SocketQuery).username;
  // Returns queryUsername or creates new username
  const username = await handleUsername(queryUsername, socket, api);

  // Set username to online users map
  onlineUsers.set(username, socket.id);

  // #TODO Rewrite to send on request
  const userMessages = await api.database.selectMessagesByUsername(username);
  socket.emit('messages', userMessages);

  const users = await api.database.selectAllUsers();

  // Remove user with same username and set online statuses
  const userInterlocutors = formInterlocutors(users, onlineUsers, username);

  // Send all interlocutors to user
  socket.emit('set interlocutors', userInterlocutors);

  // Send all available bots
  let bots = await api.database.selectBots();
  bots = bots.map((bot) => ({ ...bot, isOnline: true }));
  socket.emit('set bots', bots);

  // Update interlocutors list of other users
  broadcastInterlocutors(io, users, onlineUsers);

  return username;
};

export default onConnection;
