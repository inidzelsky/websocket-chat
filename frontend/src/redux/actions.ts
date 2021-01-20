import SocketClient from '../socket/socketClient';

import {
  SET_SOCKET,
  LOAD_INTERLOCUTORS,
  SHOW_ONLINE_USERS,
  SET_CURRENT_INTERLOCUTOR,
  LOAD_MESSAGES,
  SET_SEARCH_INTERLOCUTORS,
  LOAD_BOTS,
} from './types';
import { MessageType, UserType } from '../types';

// SOCKET
export const setSocket = (socket: SocketClient) => {
  return { type: SET_SOCKET, payload: socket };
};

export const loadInterlocutors = (interlocutors: Array<UserType>) => {
  return { type: LOAD_INTERLOCUTORS, payload: interlocutors };
};

export const loadBots = (bots: Array<UserType>) => {
  return { type: LOAD_BOTS, payload: bots };
};

// APP
export const setShowOnlineUsers = (showOnline: boolean) => {
  return { type: SHOW_ONLINE_USERS, payload: showOnline };
};

export const setCurrentInterlocutor = (interlocutor: UserType) => {
  return { type: SET_CURRENT_INTERLOCUTOR, payload: interlocutor };
};

export const setSearchInterlocutors = (filter: string) => {
  return { type: SET_SEARCH_INTERLOCUTORS, payload: filter };
};

// MESSAGES
export const loadMessages = (messages: Array<MessageType>) => {
  const payload = messages.map((message) => ({ ...message, sendTime: new Date(message.sendTime) }));
  return { type: LOAD_MESSAGES, payload };
};
