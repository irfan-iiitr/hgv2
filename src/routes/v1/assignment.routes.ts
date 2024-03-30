import express from "express";

import {
  createAssignment,
  getAssignmentById,
  deleteAssignment,
  updateAssignment,
  getAllAssignments,
} from "../../controllers/assignment.controller";
import { checkAdmin } from "../../middlewares/auth.middleware";
import { upload } from "../../config/multer.config";

const router = express.Router();

router.post("/", upload.single("image"), checkAdmin, createAssignment);
router.get("/:id", getAssignmentById);
router.get("/", getAllAssignments);
router.delete("/:id", checkAdmin, deleteAssignment);
router.patch("/:id", checkAdmin, updateAssignment);

export default router;
