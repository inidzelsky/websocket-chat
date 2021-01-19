import SocketClient from '../socket/socketClient';

import { SET_SOCKET, LOAD_INTERLOCUTORS, SHOW_ONLINE_USERS } from './types';
import { UserType } from '../types';

// SOCKET
export const setSocket = (socket: SocketClient) => {
  return { type: SET_SOCKET, payload: socket };
};

export const loadInterlocutors = (interlocutors: Array<UserType>) => {
  return { type: LOAD_INTERLOCUTORS, payload: interlocutors };
};

// APP
export const setShowOnlineUsers = (showOnline: boolean) => {
  return { type: SHOW_ONLINE_USERS, payload: showOnline };
};
