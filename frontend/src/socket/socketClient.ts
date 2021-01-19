import io from 'socket.io-client';
import { Dispatch } from 'redux';
import { setInterlocutors } from '../redux/actions';

import { UserType } from '../types';

class SocketClient {
  private socket: SocketIOClient.Socket | undefined;
  private readonly dispatch: Dispatch;

  constructor(dispatch: Dispatch) {
    this.dispatch = dispatch;
  }

  connect() {
    this.socket = io('ws://localhost:8080/', {
      query: {
        username: localStorage.getItem('username'),
      },
    });

    this.socket.on('set username', (username: string) => localStorage.setItem('username', username));

    this.socket.on('set interlocutors', (interlocutors: Array<UserType>) => {
      this.dispatch(setInterlocutors(interlocutors));
    });
  }
}

export default SocketClient;
