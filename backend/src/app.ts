import Koa from 'koa';
import { createServer } from 'http';
import SocketServer from './socket/socketServer';
import PostgresDatabase from './database/postgresDatabase';
import API from './api';

import { Server } from 'http';
import { Pool } from 'pg';

class App {
  koa: Koa;
  httpServer: Server;
  socketServer: SocketServer;

  load() {
    // Init koa app and http server
    this.koa = new Koa();
    this.httpServer = createServer(this.koa.callback());

    // Create postgres pool connection
    const pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      port: Number.parseInt(process.env.DB_PORT as string),
    });

    const postgresDatabase = new PostgresDatabase(pool);

    const api: API = {
      database: postgresDatabase,
    };

    // Create and configure socket server
    this.socketServer = new SocketServer(this.httpServer, api);
    this.socketServer.configure();
  }

  start() {
    this.httpServer.listen(process.env.PORT, () => console.log(`Server started on ${process.env.PORT} port`));
  }
}

export default App;
