import io from 'socket.io-client';
import config from '../config';
import { Dispatch } from 'redux';
import { addMessage, loadBots, loadInterlocutors, loadMessages } from '../redux/actions';
import { MessageType, UserType } from '../types';
import {
  AddMessageActionType,
  LoadBotsActionType,
  LoadInterlocutorsActionType,
  LoadMessagesActionType,
} from '../redux/actionsTypes';

type DispatchType = Dispatch<
  LoadInterlocutorsActionType | LoadBotsActionType | LoadMessagesActionType | AddMessageActionType
>;

class SocketClient {
  private socket: SocketIOClient.Socket | undefined;
  private readonly dispatch: DispatchType;

  constructor(dispatch: DispatchType) {
    this.dispatch = dispatch;
  }

  connect() {
    this.socket = io(config.serverHost, {
      query: {
        username: localStorage.getItem('username'),
      },
    });

    this.socket.on('set username', (username: string) => localStorage.setItem('username', username));

    this.socket.on('set interlocutors', (interlocutors: Array<UserType>) => {
      this.dispatch(loadInterlocutors(interlocutors));
    });

    this.socket.on('set bots', (bots: Array<UserType>) => {
      this.dispatch(loadBots(bots));
    });

    this.socket.on('messages', (messages: Array<MessageType>) => {
      this.dispatch(loadMessages(messages));
    });

    this.socket.on('new message', (message: MessageType) => {
      this.dispatch(addMessage(message));
    });
  }

  sendMessage(message: Omit<MessageType, 'sendTime'>, toBot: boolean) {
    if (toBot) (this.socket as SocketIOClient.Socket).emit('bot', message);
    else (this.socket as SocketIOClient.Socket).emit('message', message);
  }
}

export default SocketClient;
