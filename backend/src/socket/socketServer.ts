import { Server as HTTPServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';
import API from '../api';

import genUsername from '../utils/genUsername';
import { UserType } from '../types';

type SocketQuery = {
  username: string | null;
};

class SocketServer {
  private io: IOServer;
  private api: API;
  private onlineUsers: Map<string, string>;

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
      let { username } = socket.handshake.query as SocketQuery;

      if (username) {
        const user = await this.api.database.selectUserByUsername(username);
        if (!user) {
          username = genUsername(10);
          await this.api.database.createUser({ username, avatar: 'default.png' });
          socket.emit('username', username);
        }
      } else {
        username = genUsername(10);
        await this.api.database.createUser({ username, avatar: 'default.png' });
        socket.emit('username', username);
      }

      this.onlineUsers.set(username, socket.id);
      const interlocutors = await this.api.database.selectAllUsers();
      // #TODO Implement status feature
      const userInterlocutors = interlocutors
        .filter((i) => i.username !== username)
        .map((i) => {
          const isOnline = this.onlineUsers.has(i.username);
          const status = 'Lorem';

          return { ...i, isOnline, status };
        });

      socket.emit('interlocutors', userInterlocutors);
    });
  }
}

export default SocketServer;
