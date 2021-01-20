import { UserType, MessageType } from '../types';

interface Database {
  // User queries
  selectAllUsers(): Promise<Array<UserType>>;
  selectUserByUsername(username: string): Promise<UserType | null>;
  createUser(user: UserType): Promise<void>;

  // Bots
  selectBots(): Promise<Array<UserType>>;

  // Message queries
  selectMessagesByUsername(username: string): Promise<Array<MessageType>>;
  createMessage(message: MessageType): Promise<void>;
}

export default Database;
