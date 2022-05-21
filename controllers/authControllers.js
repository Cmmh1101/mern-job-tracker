import User from "../models/User.js";
import { StatusCodes } from "http-status-code";

const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  await res.send("login user");
};

const updateUser = async (req, res) => {
  await res.send("updateUser");
};

export { register, login, updateUser };
