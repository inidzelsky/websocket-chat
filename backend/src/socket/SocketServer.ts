import { Server as HTTPServer } from 'http';
import { Server as IOServer, Socket } from 'socket.io';

class SocketServer {
  private io: IOServer;

  constructor(httpServer: HTTPServer) {
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
