import { api } from "./api";

export const signInRequest = async (data) => {
  return api.post("/sign-in", data);
};

export const signUpRequest = async (data) => {
  return api.post("/sign-up", data);
};
export const logOutRequest = async (data) => {
  return api.delete("/logout", data);
};
export const chartInRequest = async (data) => {
  return api.post("/chart-in", data);
};
