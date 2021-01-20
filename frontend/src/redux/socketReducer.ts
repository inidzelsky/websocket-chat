import SocketClient from '../socket/socketClient';

import { SetSocketActionType } from './actionsTypes';
import { SET_SOCKET } from './types';

type SocketReducerStateType = {
  socketClient: SocketClient | null;
};

const initialState: SocketReducerStateType = {
  socketClient: null,
};

const socketReducer = (state = initialState, action: SetSocketActionType) => {
  switch (action.type) {
    case SET_SOCKET:
      return { ...state, socketClient: action.payload };
    default:
      return state;
  }
};

export default socketReducer;
