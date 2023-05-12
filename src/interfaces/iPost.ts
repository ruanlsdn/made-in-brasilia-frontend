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
  location: string;
  openDay: string;
  closeDay: string;
  openTime: string;
  closeTime: string;
  PostStatus: iPostStatus;
  postCategory: iPostCategory;
}
