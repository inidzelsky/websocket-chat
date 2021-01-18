export type UserType = {
  username: string;
  avatar: string;
};

export type MessageType = {
  sender: string;
  receiver: string;
  content: string;
  sendTime: Date;
};
