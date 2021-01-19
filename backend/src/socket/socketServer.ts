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

      const interlocutors = await this.api.database.selectAllUsers();
      socket.emit(
        'interlocutors',
        // #TODO Implement status feature
        interlocutors.filter((i) => i.username !== username).map((i) => ({ ...i, isOnline: true, status: 'Lorem' })),
      );
    });
  }
}

export default SocketServer;
