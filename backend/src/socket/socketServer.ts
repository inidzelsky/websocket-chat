import { Server as HTTPServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';
import API from '../api';

import onConnection from './handlers/connectionHandler';

class SocketServer {
  private readonly io: IOServer;
  private readonly api: API;
  private readonly onlineUsers: Map<string, string>;

  constructor(httpServer: HTTPServer, api: API) {
    this.api = api;
    this.onlineUsers = new Map();
    this.io = new IOServer(httpServer, {
      cors: {
        origin: process.env.CLIENT_HOST,
        methods: ['GET', 'POST'],
      },
    });
  }

  configure() {
    this.io.on('connection', async (socket: Socket) => {
      await onConnection(this.io, socket, this.api, this.onlineUsers);
    });
  }
}

export default SocketServer;
