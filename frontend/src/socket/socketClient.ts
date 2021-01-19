import io from 'socket.io-client';
import { Dispatch } from 'redux';

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
  }
}

export default SocketClient;
