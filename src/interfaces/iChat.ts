import { iMessage } from "./iMessage";

export interface iChat {
  users: string[];
  messages: iMessage[];
  createdAt: Date;
}
