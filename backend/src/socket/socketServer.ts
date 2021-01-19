import { Server as HTTPServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';
import API from '../api';

type SocketQuery = {
  username: string | null;
};

class SocketServer {
  private io: IOServer;
  private api: API;

  constructor(httpServer: HTTPServer, api: API) {
    this.api = api;
    this.io = new IOServer(httpServer, {
      cors: {
        origin: process.env.CLIENT_HOST,
        methods: ['GET', 'POST'],
      },
    });
  }

  configure() {
    this.io.on('connection', (socket: Socket) => {
      console.log(socket.id);
    });
  }
}

export default SocketServer;
