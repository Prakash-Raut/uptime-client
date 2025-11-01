import { z } from "zod";
import { api } from "./http";

export const authSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type loginData = z.infer<typeof authSchema>;
export type registerData = z.infer<typeof authSchema>;

export const register = async (data: registerData) =>
  await api.post(`/auth/register`, data);
export const login = async (data: loginData) =>
  await api.post(`/auth/login`, data);
