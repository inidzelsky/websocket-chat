import {
  SET_SOCKET,
  LOAD_INTERLOCUTORS,
  SHOW_ONLINE_USERS,
  SET_CURRENT_INTERLOCUTOR,
  LOAD_MESSAGES,
  SET_SEARCH_INTERLOCUTORS,
  LOAD_BOTS
} from './types';

const initialState = {
  socketClient: null,
  interlocutors: [],
  showOnlineUsers: false,
  currentInterlocutor: null,
  searchInterlocutors: '',
  messages: [],
  bots: []
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SOCKET:
      return { ...state, socketClient: action.payload };
    case LOAD_INTERLOCUTORS:
      return { ...state, interlocutors: action.payload };
    case LOAD_BOTS:
      return { ...state, bots: action.payload };
    case SHOW_ONLINE_USERS:
      return { ...state, showOnlineUsers: action.payload };
    case SET_CURRENT_INTERLOCUTOR:
      return { ...state, currentInterlocutor: action.payload };
    case LOAD_MESSAGES:
      return { ...state, messages: action.payload };
    case SET_SEARCH_INTERLOCUTORS:
      return { ...state, searchInterlocutors: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
