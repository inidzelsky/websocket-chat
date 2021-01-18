import { createServer } from 'http';
import Koa from 'koa';
import { Server, Socket } from 'socket.io';
import { Pool } from 'pg';

const app = new Koa();
const server = createServer(app.callback());
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const pool = new Pool({
  user: 'obismarck',
  host: '127.0.0.1',
  database: 'websocketchat',
  port: 5432,
});

io.on('connection', (socket: Socket) => {
  console.log(socket.id);

  socket.emit('message', { hello: 'world' });
});

server.listen(3001, () => console.log('Server started on port 3001'));
