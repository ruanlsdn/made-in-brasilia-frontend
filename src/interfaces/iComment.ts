import { iUser } from "./iUser";

export interface iComment {
  id: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  postId: string;
  userId: string;
  Answer: any[];
  User: iUser;
}
