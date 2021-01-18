import { UserType, MessageType } from '../types';

interface Database {
  // User queries
  selectAllUsers(): Promise<Array<UserType>>;
  createUser(user: UserType): Promise<void>;

  // Message queries
  selectMessagesByUserName(username: string): Promise<Array<MessageType>>;
  createMessage(message: MessageType): Promise<void>;
}

export default Database;
