export type UserType = {
  avatar: string;
  username: string;
  status: string;
  isOnline: boolean;
};

export type MessageType = {
  sender: string;
  receiver: string;
  sendTime: Date;
  content: string;
};
