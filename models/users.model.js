import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      minlength: 2
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    role: {
      type: String,
      enum: ["host", "guest", "admin"],
      default: "guest",
    },
    refreshToken: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
