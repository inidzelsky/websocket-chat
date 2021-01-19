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
  await api.database.createMessage({ sender, receiver, content, sendTime: new Date() });

  // Send messages to the sender
  const senderMessages = await api.database.selectMessagesByUsername(sender);
  socket.emit('messages', senderMessages);

  // If receiver is online, send messages to the receiver
  if (onlineUsers.has(receiver)) {
    const receiverMessages = await api.database.selectMessagesByUsername(receiver);
    const receiverSocketId = onlineUsers.get(receiver) as string;
    socket.to(receiverSocketId).emit('messages', receiverMessages);
  }
};

export default onMessage;
