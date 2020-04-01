import { Request } from "express";
export interface User {
  username: string;
  shortname: string;
  empcode: string;
  userid: string;
  iat: number;
  exp: number;
}
export interface UserAuthRequest extends Request {
  user: User;
}
