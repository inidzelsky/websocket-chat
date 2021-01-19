import { SET_SOCKET, SET_INTERLOCUTORS } from './types';

const initialState = {
  socketClient: null,
  interlocutors: []
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SOCKET:
      return { ...state, socketClient: action.payload };
    case SET_INTERLOCUTORS:
      return { ...state, interlocutors: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
