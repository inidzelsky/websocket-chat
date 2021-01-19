import { createServer } from 'http';
import Koa from 'koa';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

import SocketServer from './socket/SocketServer';
import PostgresDatabase from './database/postgresDatabase';

dotenv.config({ path: '.env' });

const app = new Koa();
const server = createServer(app.callback());
const socketServer = new SocketServer(server);
socketServer.configure();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number.parseInt(process.env.DB_PORT as string),
});

const postgresDatabase = new PostgresDatabase(pool);

type SocketQuery = {
  username: string | null;
  image: string | null;
};

const port = Number.parseInt(process.env.PORT as string) || 8080;

server.listen(port, () => console.log('Server started on port 3001'));
