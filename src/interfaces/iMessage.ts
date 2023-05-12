export interface iMessage {
  userId: string;
  text: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}
