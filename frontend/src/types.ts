export type UserType = {
  avatar: string;
  username: string;
  status: string;
  isOnline: boolean;
};

export type MessageType = {
  username: string;
  date: Date;
  text: string;
};
