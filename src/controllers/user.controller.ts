import { userServices } from "../services";
import type { createUserRequest, signInRequest } from "../typeDefs/app-request";
import { Response, Request } from "express";
import { uploadImage } from "../config/cloudinary.config";

const createUser = async (req: createUserRequest, res: Response) => {
  try {
    if (req.file) {
      const imageUrl = await uploadImage(req.file);
      req.body.profile_image = imageUrl;
    }
    const user = await userServices.createUser(req.body);
    return res.status(201).json({
      data: { user },
      message: "User created successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error.message || "User creation failed",
      success: false,
      err: error,
    });
  }
};

const signIn = async (req: signInRequest, res: Response) => {
  try {
    const response = await userServices.signIn(req.body);
    return res.status(200).json({
      data: response,
      message: "User Login Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error.message || "Token Invalid",
      success: false,
      err: error,
    });
  }
};

const forgetPassword = async (req: Request, res: Response) => {
  try {
    const response = await userServices.forgetPassword(req.body.email);
    return res.status(200).json({
      data: response,
      message: "OTP sent successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error.message || "Failed to send OTP",
      success: false,
      err: error,
    });
  }
};

const resetPassword = async (req: Request, res: Response) => {
  try {
    const response = await userServices.resetPassword(
      req.body.email,
      req.body.otp,
      req.body.password,
    );
    return res.status(200).json({
      data: response,
      message: "Password reset successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error.message || "Failed to reset password",
      success: false,
      err: error,
    });
  }
};

export { createUser, signIn, forgetPassword, resetPassword };
