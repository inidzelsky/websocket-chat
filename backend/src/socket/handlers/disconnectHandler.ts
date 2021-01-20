import { Server } from 'socket.io';
import API from '../../api';

import { broadcastInterlocutors } from './connectionHandler';

const onDisconnect = (
  io: Server,
  api: API,
  onlineUsers: Map<string, string>,
  username: string,
) => async () => {
  const users = await api.database.selectAllUsers();
  onlineUsers.delete(username);

  broadcastInterlocutors(io, users, onlineUsers);
};

export default onDisconnect;
