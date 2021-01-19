import SocketClient from '../socket/socketClient';

import { SET_SOCKET, SET_INTERLOCUTORS } from './types';
import { UserType } from '../types';

export const setSocket = (socket: SocketClient) => {
  return { type: SET_SOCKET, payload: socket };
};

export const setInterlocutors = (interlocutors: Array<UserType>) => {
  return { type: SET_INTERLOCUTORS, payload: interlocutors };
};
