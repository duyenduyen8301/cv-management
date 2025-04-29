import { sendPost } from "./axios";

export const login = (payload: any) => sendPost("/auth/login", payload);
