import { Schema, model, Document } from "mongoose";

export interface UserModel extends Document {
  email: string;
  password: string;
}
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = model<UserModel>("users", userSchema);

export default User;
