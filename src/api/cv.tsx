import { sendGet } from "./axios";

export const getCVs = (data: any) => sendGet("/cvs", data);
