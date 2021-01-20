import {
  LoadBotsActionType,
  LoadInterlocutorsActionType,
  ShowOnlineUsersActionType,
  SetCurrentInterlocutorActionType,
  SetSearchInterlocutorsActionType,
} from './actionsTypes';

import { UserType } from '../types';
import {
  LOAD_BOTS,
  LOAD_INTERLOCUTORS,
  SET_CURRENT_INTERLOCUTOR,
  SET_SEARCH_INTERLOCUTORS,
  SHOW_ONLINE_USERS,
} from './types';

type InterlocutorsReducerStateType = {
  interlocutors: Array<UserType>;
  bots: Array<UserType>;
  showOnlineUsers: boolean;
  currentInterlocutor: UserType | null;
  searchInterlocutors: string;
};

const initialState: InterlocutorsReducerStateType = {
  interlocutors: [],
  bots: [],
  showOnlineUsers: true,
  currentInterlocutor: null,
  searchInterlocutors: '',
};

const interlocutorsReducer = (
  state = initialState,
  action:
    | LoadBotsActionType
    | LoadInterlocutorsActionType
    | ShowOnlineUsersActionType
    | SetCurrentInterlocutorActionType
    | SetSearchInterlocutorsActionType,
) => {
  switch (action.type) {
    case LOAD_INTERLOCUTORS:
      return { ...state, interlocutors: action.payload };
    case LOAD_BOTS:
      return { ...state, bots: action.payload };
    case SHOW_ONLINE_USERS:
      return { ...state, showOnlineUsers: action.payload };
    case SET_CURRENT_INTERLOCUTOR:
      return { ...state, currentInterlocutor: action.payload };
    case SET_SEARCH_INTERLOCUTORS:
      return { ...state, searchInterlocutors: action.payload };
    default:
      return state;
  }
};

export default interlocutorsReducer;
