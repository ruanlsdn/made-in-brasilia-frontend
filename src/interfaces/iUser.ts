export interface iUser {
  id: string;
  username: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
  userTypeId: number;
}
