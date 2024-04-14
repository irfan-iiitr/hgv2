import express from "express";

import {
  createAssignment,
  getAssignmentById,
  deleteAssignment,
  updateAssignment,
  getAllAssignments,
  getAllAssignmentsByLevelId,
  submitAssignment,
  verifyAssignment,
} from "../../controllers/assignment.controller";
import { checkAdmin } from "../../middlewares/auth.middleware";
import { upload } from "../../config/multer.config";

const router = express.Router();

router.post("/", upload.single("image"), createAssignment);
router.get("/:id", getAssignmentById);
router.get("/", getAllAssignments);
router.get("/level/:levelId", getAllAssignmentsByLevelId);
router.delete("/:id", checkAdmin, deleteAssignment);
router.patch("/:id", checkAdmin, updateAssignment);
router.patch("/submit/:id", submitAssignment);
router.post("/verify/:id", verifyAssignment);

export default router;
