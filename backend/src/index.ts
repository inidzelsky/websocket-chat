import { createServer } from 'http';
import Koa from 'koa';
import { Server, Socket } from 'socket.io';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const app = new Koa();
const server = createServer(app.callback());
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number.parseInt(process.env.DB_PORT as string),
});

io.on('connection', (socket: Socket) => {
  console.log(socket.id);

  socket.emit('message', { hello: 'world' });
});

const port = Number.parseInt(process.env.PORT as string) || 8080;

server.listen(port, () => console.log('Server started on port 3001'));
