import { Server as HTTPServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';
import API from '../api';

import onConnection from './handlers/connectionHandler';
import onDisconnect from './handlers/disconnectHandler';
import onMessage from './handlers/messageHandler';
import onBots from './handlers/botsHandler';
import { spamBot } from './handlers/botsHandler';

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
      try {
        const username = await onConnection(this.io, socket, this.api, this.onlineUsers);

        // Message handler
        socket.on('message', onMessage(this.io, socket, this.api, this.onlineUsers));

        // Bots handler
        socket.on('bot', onBots(socket, this.api));

        // Spam bot
        spamBot(socket, this.api, this.onlineUsers, username);

        // Disconnect handler
        socket.on(
          'disconnect',
          onDisconnect(this.io, this.api, this.onlineUsers, username),
        );
      } catch(e) {
        console.log(e.message);
      }
    });
  }
}

export default SocketServer;
