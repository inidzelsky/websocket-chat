import { Pool } from 'pg';
import { MessageType, UserType } from '../types';
import Database from './database';

class PostgresDatabase implements Database {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async selectAllUsers(): Promise<Array<UserType>> {
    const sql = `select username, avatar, status from users`;
    const { rows } = await this.pool.query(sql);
    return rows;
  }

  async selectUserByUsername(username: string): Promise<UserType | null> {
    const sql = `select username, avatar, status from users where username = $1`;
    const { rows } = await this.pool.query(sql, [username]);
    if (rows.length > 0) return rows[0];
    return null;
  }

  async createUser(user: UserType): Promise<void> {
    const { username, avatar, status } = user;
    const sql = `insert into users (username, avatar, status) values ($1, $2, $3)`;
    await this.pool.query(sql, [username, avatar, status]);
  }

  async selectBots(): Promise<Array<UserType>> {
    const sql = `select name as "username", avatar, status from bots`;
    const { rows } = await this.pool.query(sql);
    return rows;
  }

  async selectMessagesByUsername(username: string): Promise<Array<MessageType>> {
    const sql = `select sender, receiver, content, send_time as "sendTime"
      from messages where sender = $1 or receiver = $1`;

    const { rows } = await this.pool.query(sql, [username]);
    return rows;
  }

  async createMessage(message: MessageType): Promise<void> {
    const { sender, receiver, content, sendTime } = message;
    const sql = `insert into messages (sender, receiver, content, send_time) values 
      ($1, $2, $3, $4)`;
    await this.pool.query(sql, [sender, receiver, content, sendTime]);
  }
}

export default PostgresDatabase;
