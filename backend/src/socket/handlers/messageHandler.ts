import { Server, Socket } from 'socket.io';
import API from '../../api';
import { MessageType } from '../../types';

const onMessage = (
  io: Server,
  socket: Socket,
  api: API,
  onlineUsers: Map<string, string>,
) => async (message: Pick<MessageType, 'sender' | 'receiver' | 'content'>) => {
  // Insert a message to the database
  const { sender, receiver, content } = message;
  const timedMessage = { ...message, sendTime: new Date() };
  await api.database.createMessage(timedMessage);

  // Send messages to the sender
  socket.emit('new message', timedMessage);

  // If receiver is online, send messages to the receiver
  if (onlineUsers.has(receiver)) {
    const receiverSocketId = onlineUsers.get(receiver) as string;
    socket.to(receiverSocketId).emit('new message', timedMessage);
  }
};

export default onMessage;
