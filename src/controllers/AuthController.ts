import User from "src/models/UserModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";
import { Request, Response } from "express";
class AuthController {
  public register = async (req: Request, res: Response) => {
    const email = <string>req.body.email;
    const password = <string>req.body.password;
    const confirmPassword = <string>req.body.confirmPassword;
    const emailExist = await User.find({ email });

    if (emailExist.length !== 0) {
      return res.json({
        success: false,
        msg: "User with that email Already Exist"
      });
    }
    if (password !== confirmPassword) {
      return res.json({
        success: false,
        msg: "Password and Confirm Password do not match"
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const user = new User({
      email,
      password: hashedPass
    });
    await user.save();
    const token = jwt.sign({ email }, config.get("JWT_SECRET"));
    res.json({ success: true, token });
  };
  public login = async (req: Request, res: Response) => {
    const email = <string>req.body.email;
    const password = <string>req.body.password;
    const emailExist = await User.find({ email });
    if (emailExist.length === 0) {
      return res.json({
        success: false,
        msg: "User with that does not exist!"
      });
    }
    const matchPassHash = await bcrypt.compare(
      password,
      emailExist[0].password
    );
    if (!matchPassHash) {
      return res.json({ success: false, msg: "User Password does not match!" });
    }
    const token = jwt.sign({ email }, config.get("JWT_SECRET"));
    res.json({ success: true, token });
  };
}
const authController = new AuthController();

export default authController;
