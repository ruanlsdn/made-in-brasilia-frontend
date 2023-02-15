export interface iSinglePost {
  id: string;
  name: string;
  text: string;
  openDay: string;
  closeDay: string;
  openTime: string;
  closeTime: string;
  createdAt: Date;
  updatedAt: Date;
  cityId: string;
  postStatusId: number;
  userId?: any;
  Comment: any[];
}
