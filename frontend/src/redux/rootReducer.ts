import { combineReducers } from 'redux';
import interlocutorsReducer from './interlocutorsReducer';
import socketReducer from './socketReducer';
import messagesReducer from './messagesReducer';

const rootReducer = combineReducers({
  socket: socketReducer,
  interlocutors: interlocutorsReducer,
  messages: messagesReducer,
});

export default rootReducer;
