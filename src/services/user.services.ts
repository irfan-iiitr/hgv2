import { userRepository } from "../repositories/index";
import InterfaceUser from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config/index";
import { generateOTP, verifyOTP } from "../utils/otp-worker";
import { Types } from "mongoose";

const createUser = async (
  data: InterfaceUser,
): Promise<InterfaceUser | null> => {
  try {
    const response = await userRepository.createUser(data);
    return response;
  } catch (error: unknown) {
    console.log(error);
    throw error;
  }
};

const signIn = async (data: any): Promise<string | null> => {
  try {
    const user = await userRepository.getUserByEmail(data.email);
    if (!user) {
      console.log("User not found"); // Debugging
      throw new Error("User not found");
    }

    const isMatchPassword = await checkPassword(data.password, user.password);
    if (!isMatchPassword) {
      console.log("Password not matched"); // Debugging
      throw new Error("Password not matched");
    }

    const token = createToken(user);
    return token;
  } catch (error: unknown) {
    console.log("There is Error in Services Layer"); // Debugging
    throw error;
  }
};

const getUserById = async (id: string): Promise<InterfaceUser | null> => {
  try {
    const response = await userRepository.getUserById(id);
    return response;
  } catch (error) {
    console.log("There is Error in Services Layer"); // Debugging
    throw error;
  }
};

const updateUser = async (
  id: string | Types.ObjectId,
  data: Partial<InterfaceUser>,
): Promise<InterfaceUser | null> => {
  try {
    const response = await userRepository.updateUser(id, data);
    return response;
  } catch (error) {
    console.log("There is Error in Services Layer");
    throw error;
  }
};

const deleteUser = async (id: string): Promise<object | null> => {
  try {
    const response = await userRepository.deleteUser(id);
    return response;
  } catch (error) {
    console.log("There is an error in deleting user - Service layer");
    throw error;
  }
};

const getAllUsers = async (): Promise<InterfaceUser[] | null> => {
  try {
    const response = await userRepository.getAllUsers();
    return response;
  } catch (error) {
    console.log("There is Error in Services Layer");
    throw error;
  }
};

const createToken = (user: InterfaceUser): string => {
  try {
    const payload = {
      id: user._id,
      email: user.email,
    };
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  } catch (error) {
    console.log("There is Error in creating token - Service Layer");
    throw error;
  }
};

const verifyToken = (token: string): JwtPayload | string => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.log("There is Error in verifying token - Service Layer");
    throw error;
  }
};

const checkPassword = (
  plainPassword: string,
  hashedPassword: string,
): Promise<Boolean> => {
  try {
    return bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    console.log("There is Error in checking hashed password - Service Layer");
    throw error;
  }
};

const forgetPassword = async (email: string): Promise<boolean | null> => {
  try {
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      console.log("User not found"); // Debugging
      throw new Error("User not found");
    }

    const otp = generateOTP(email);

    return otp;
  } catch (error: unknown) {
    console.log("There is Error in Services Layer"); // Debugging
    throw error;
  }
};

const resetPassword = async (
  email: string,
  otp: number,
  password: string,
): Promise<boolean | null> => {
  try {
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      console.log("User not found"); // Debugging
      throw new Error("User not found");
    }

    const response = await verifyOTP(email, otp);

    if (!response) {
      console.log("OTP not verified"); // Debugging
      throw new Error("OTP not verified");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const updatedUser = await userRepository.updateUser(user._id, {
      ...user,
      password: hashedPassword,
    });

    if (!updatedUser) {
      console.log("Password not updated"); // Debugging
      throw new Error("Password not updated");
    }

    return response;
  } catch (error: unknown) {
    console.log("There is Error in Services Layer"); // Debugging
    throw error;
  }
};

export default {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  signIn,
  resetPassword,
  forgetPassword,
};
