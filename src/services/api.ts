import axios from "axios";
import { iCreateCommentDto } from "../interfaces/iCreateCommentDto";
import { iCreatePostRatingDto } from "../interfaces/iCreatePostRatingDto";
import { iCreateUserDto } from "../interfaces/iCreateUserDto";
import { iLoginDto } from "../interfaces/iLoginDto";

const api = axios.create({
  baseURL: "made-in-brasilia-backend-production.up.railway.app",
});

// LOGIN REQUEST
export const loginRequest = async (dto: iLoginDto) => {
  return await api.post("/auth/login", dto);
};
// END OF LOGIN REQUEST

// USER REQUEST
export const createUserRequest = async (dto: iCreateUserDto) => {
  return await api.post("/user", dto);
};

export const findUniqueUserRequest = async (id: string) => {
  return await api.get(`/user/${id}`);
};
// END OF USER REQUEST

// CITY REQUEST
export const listAllCityRequest = async () => {
  return await api.get("/city");
};

export const listAllCityImagesRequest = async (cityId: string) => {
  return await api.get(`/city/images/list/${cityId}`);
};
// END OF CITY REQUEST

// POST REQUEST
export const listAllPostRequest = async (cityId: string) => {
  return await api.get(`/post?cityId=${cityId}`);
};

export const listAllPostImagesRequest = async (postId: string) => {
  return await api.get(`/post/images/list/${postId}`);
};

export const findUniquePostRequest = async (postId: string) => {
  return await api.get(`/post/${postId}`);
};

export const existsUserVote = async (userId: string) => {
  return await api.get(`/post-rating/user-already-voted/${userId}`);
};

export const createPostRatingRequest = async (dto: iCreatePostRatingDto) => {
  return await api.post("/post-rating", dto);
};

export const calculatePostRateAvgRequest = async (postId: string) => {
  return await api.get(`/post-rating/avg/${postId}`);
};
// END OF POST REQUEST

// COMMENT REQUEST
export const createCommentRequest = async (dto: iCreateCommentDto) => {
  return await api.post("/comment", dto);
};

export const listAllCommentsRequest = async (page: number, postId: string) => {
  return await api.get(`/comment/${postId}?page=${page}`);
};
// END OF COMMENT REQUEST
