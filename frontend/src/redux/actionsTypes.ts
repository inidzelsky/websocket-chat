import {
  ADD_MESSAGE,
  LOAD_BOTS,
  LOAD_INTERLOCUTORS, LOAD_MESSAGES,
  SET_CURRENT_INTERLOCUTOR,
  SET_SEARCH_INTERLOCUTORS, SET_SOCKET,
  SHOW_ONLINE_USERS
} from "./types";
import {MessageType, UserType} from "../types";
import SocketClient from "../socket/socketClient";

export type LoadInterlocutorsActionType = {
  type: typeof LOAD_INTERLOCUTORS;
  payload: Array<UserType>;
};

export type LoadBotsActionType = {
  type: typeof LOAD_BOTS;
  payload: Array<UserType>;
};

export type ShowOnlineUsersActionType = {
  type: typeof SHOW_ONLINE_USERS;
  payload: boolean;
};

export type SetCurrentInterlocutorActionType = {
  type: typeof SET_CURRENT_INTERLOCUTOR;
  payload: UserType;
};

export type SetSearchInterlocutorsActionType = {
  type: typeof SET_SEARCH_INTERLOCUTORS;
  payload: string;
};

export type LoadMessagesActionType = {
  type: typeof LOAD_MESSAGES;
  payload: Array<MessageType>;
};

export type AddMessageActionType = {
  type: typeof ADD_MESSAGE;
  payload: MessageType;
};

export type SetSocketActionType = {
  type: typeof SET_SOCKET;
  payload: SocketClient;
};
