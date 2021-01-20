import { LoadMessagesActionType, AddMessageActionType } from './actionsTypes';
import { ADD_MESSAGE, LOAD_MESSAGES } from './types';
import { MessageType } from '../types';

type MessagesReducerStateType = {
  messages: Array<MessageType>;
};

const initialState: MessagesReducerStateType = {
  messages: [],
};

const messagesReducer = (state = initialState, action: LoadMessagesActionType | AddMessageActionType) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return { ...state, messages: action.payload };
    case ADD_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default messagesReducer;
