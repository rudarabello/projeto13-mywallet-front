import { localhost } from "./api";

export const signInRequest = async (data) => {
  return localhost.post("/sign-in", data);
};

export const signUpRequest = async (data) => {
  return localhost.post("/sign-up", data);
};
