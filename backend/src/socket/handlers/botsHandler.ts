import { Socket } from 'socket.io';
import API from '../../api';
import { MessageType } from '../../types';

const echoBot = async (
  socket: Socket,
  api: API,
  message: Omit<MessageType, 'sendTime'>,
) => {
  const { sender, receiver, content } = message;
  await api.database.createMessage({
    ...message,
    sendTime: new Date(),
  });

  // Create and save bot message
  const botMessage = {
    sender: receiver,
    receiver: sender,
    content,
    sendTime: new Date(),
  };
  await api.database.createMessage(botMessage);

  const messages = await api.database.selectMessagesByUsername(sender);
  socket.emit('messages', messages);
};

const reverseBot = async (
  socket: Socket,
  api: API,
  message: Omit<MessageType, 'sendTime'>,
) => {
  const { sender, receiver, content } = message;
  await api.database.createMessage({
    ...message,
    sendTime: new Date(),
  });

  const reverseContent = content.split('').reverse().join('');
  // Create and save bot message
  const botMessage = {
    sender: receiver,
    receiver: sender,
    content: reverseContent,
  };

  const messages = await api.database.selectMessagesByUsername(sender);
  socket.emit('messages', messages);

  setTimeout(async () => {
    await api.database.createMessage({ ...botMessage, sendTime: new Date() });

    const messages = await api.database.selectMessagesByUsername(sender);
    socket.emit('messages', messages);
  }, 3000);
};

const genTimeout = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const spamBot = async (
  socket: Socket,
  api: API,
  onlineUsers: Map<string, string>,
  username: string,
) => {
  if (!onlineUsers.has(username)) return;

  const spamContent = 'Would you like some spam?';
  // Create and save bot message
  const botMessage = {
    sender: 'Spam bot',
    receiver: username,
    content: spamContent,
  };

  const timeout = genTimeout(10000, 120000);
  setTimeout(async () => {
    await api.database.createMessage({ ...botMessage, sendTime: new Date() });

    const messages = await api.database.selectMessagesByUsername(username);
    socket.emit('messages', messages);

    spamBot(socket, api, onlineUsers, username);
  }, timeout);
};

const ignoreBot = async (
  socket: Socket,
  api: API,
  message: Omit<MessageType, 'sendTime'>,
) => {
  const { sender, receiver } = message;
  await api.database.createMessage({
    ...message,
    sendTime: new Date(),
  });

  const messages = await api.database.selectMessagesByUsername(sender);
  socket.emit('messages', messages);
};

const onBots = (socket: Socket, api: API) => async (
  message: Omit<MessageType, 'sendTime'>,
) => {
  switch (message.receiver) {
    case 'Echo bot':
      return await echoBot(socket, api, message);
    case 'Reverse bot':
      return await reverseBot(socket, api, message);
    case 'Ignore bot':
      return await ignoreBot(socket, api, message);
    case 'Spam bot':
      return await ignoreBot(socket, api, message);
    default:
      return;
  }
};

export default onBots;
