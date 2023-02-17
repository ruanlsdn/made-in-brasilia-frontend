type iPostStatus = {
  id: number;
  description: string;
};

type iPostCategory = {
  id: number;
  description: string;
};

export interface iPost {
  id: string;
  name: string;
  text: string;
  openDay: string;
  closeDay: string;
  openTime: string;
  closeTime: string;
  PostStatus: iPostStatus;
  PostCategory: iPostCategory;
}
