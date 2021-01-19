import { SET_SOCKET, LOAD_INTERLOCUTORS, SHOW_ONLINE_USERS, SET_CURRENT_INTERLOCUTOR } from './types';

const initialState = {
  socketClient: null,
  interlocutors: [],
  showOnlineUsers: false,
  currentInterlocutor: null,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SOCKET:
      return { ...state, socketClient: action.payload };
    case LOAD_INTERLOCUTORS:
      return { ...state, interlocutors: action.payload };
    case SHOW_ONLINE_USERS:
      return { ...state, showOnlineUsers: action.payload };
    case SET_CURRENT_INTERLOCUTOR:
      return { ...state, currentInterlocutor: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
