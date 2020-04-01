import jwt from "jsonwebtoken";
import config from "config";
import { Response, NextFunction } from "express";
import { UserAuthRequest, User } from "types/basicTypeDefs";

const authenticate = (
  req: UserAuthRequest,
  res: Response,
  next: NextFunction
) => {
  const { token } = <{ token: string }>req.headers;
  jwt.verify(token, config.get("JWT_SECRET"), (err: any, decoded: User) => {
    if (err) {
      return res.json({ err });
    }
    req.user = decoded;
    next();
  });
};

export default authenticate;
