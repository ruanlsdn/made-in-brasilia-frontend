import axios from "axios";
import { iCreateCommentDto } from "../interfaces/iCreateCommentDto";
import { iCreateUserDto } from "../interfaces/iCreateUserDto";
import { iLoginDto } from "../interfaces/iLoginDto";

const api = axios.create({ baseURL: "http://localhost:3000" });

// LOGIN REQUEST
export const loginRequest = async (dto: iLoginDto) => {
  return await api.post("/auth/login", dto);
};
// END OF LOGIN REQUEST

// USER REQUEST
export const createUserRequest = async (dto: iCreateUserDto) => {
  return await api.post("/user", dto);
};
// END OF USER REQUEST

// CITY REQUEST
export const listAllCityRequest = async () => {
  return await api.get("/city");
};

export const listAllCityImagesRequest = async () => {
  return await api.get("/city/images/list");
};
// END OF CITY REQUEST

// POST REQUEST
export const listAllPostRequest = async (cityId: string) => {
  return await api.get(`/post?cityId=${cityId}`);
};

export const findUniquePostRequest = async (postId: string) => {
  return await api.get(`/post/${postId}`);
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
