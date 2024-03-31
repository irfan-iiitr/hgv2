import express from "express";
import {
  createUser,
  forgetPassword,
  resetPassword,
  signIn,
} from "../../controllers/user.controller";
import { upload } from "../../config/multer.config";
import { validateUserRequest } from "../../middlewares/user-request.middleware";

const router = express.Router();
// User Routes
router.post("/signup", upload.single("image"), validateUserRequest, createUser);
router.post("/signin", signIn);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);

export default router;
