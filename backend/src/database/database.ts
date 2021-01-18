interface Database {
  // User queries
  selectAllUsers(): Promise<any>;
  createUser(): Promise<void>;

  // Message queries
  selectMessagesByUserName(username: string): Promise<any>;
  createMessage(message: any): Promise<any>;
}

export default Database;
