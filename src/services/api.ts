import axios from "axios";
import { iCreateCommentDto } from "../interfaces/iCreateCommentDto";

const api = axios.create({ baseURL: "http://localhost:3000" });

// CITY REQUEST
export const listAllCityRequest = async () => {
  return await api.get("/city");
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
// END OF COMMENT REQUEST
