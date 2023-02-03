import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [50, "Name is too large"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "name is required"],
      minLength: [6, "Password must be at least 6 characters."],
      maxLength: [30, "password is too large"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    isMasterAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    wishlist: {
      type: String,
      required: true,
      default: [],
    },
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
