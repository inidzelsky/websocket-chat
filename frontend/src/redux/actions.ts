import SocketClient from '../socket/socketClient';

import {
  SET_SOCKET,
  LOAD_INTERLOCUTORS,
  SHOW_ONLINE_USERS,
  SET_CURRENT_INTERLOCUTOR,
  LOAD_MESSAGES,
  SET_SEARCH_INTERLOCUTORS,
  LOAD_BOTS,
  ADD_MESSAGE,
} from './types';

import {
  AddMessageActionType,
  LoadBotsActionType,
  LoadInterlocutorsActionType,
  LoadMessagesActionType,
  SetCurrentInterlocutorActionType,
  SetSearchInterlocutorsActionType,
  SetSocketActionType,
  ShowOnlineUsersActionType,
} from './actionsTypes';

import { MessageType, UserType } from '../types';

// SOCKET
export const setSocket = (socket: SocketClient): SetSocketActionType => {
  return { type: SET_SOCKET, payload: socket };
};

// INTERLOCUTORS
export const setShowOnlineUsers = (showOnline: boolean): ShowOnlineUsersActionType => {
  return { type: SHOW_ONLINE_USERS, payload: showOnline };
};

export const setCurrentInterlocutor = (interlocutor: UserType): SetCurrentInterlocutorActionType => {
  return { type: SET_CURRENT_INTERLOCUTOR, payload: interlocutor };
};

export const setSearchInterlocutors = (filter: string): SetSearchInterlocutorsActionType => {
  return { type: SET_SEARCH_INTERLOCUTORS, payload: filter };
};

export const loadInterlocutors = (interlocutors: Array<UserType>): LoadInterlocutorsActionType => {
  return { type: LOAD_INTERLOCUTORS, payload: interlocutors };
};

export const loadBots = (bots: Array<UserType>): LoadBotsActionType => {
  return { type: LOAD_BOTS, payload: bots };
};

// MESSAGES
export const loadMessages = (messages: Array<MessageType>): LoadMessagesActionType => {
  const payload = messages.map((message) => ({ ...message, sendTime: new Date(message.sendTime) }));
  return { type: LOAD_MESSAGES, payload };
};

export const addMessage = (message: MessageType): AddMessageActionType => {
  const timeParsedMessage = { ...message, sendTime: new Date(message.sendTime) };
  return { type: ADD_MESSAGE, payload: timeParsedMessage };
};
