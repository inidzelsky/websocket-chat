import SocketClient from '../socket/socketClient';

import { SET_SOCKET } from './types';

export const setSocket = (socket: SocketClient) => {
  return { type: typeof SET_SOCKET, payload: socket };
};
