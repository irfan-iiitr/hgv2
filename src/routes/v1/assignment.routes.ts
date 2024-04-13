import express from "express";

import {
  createAssignment,
  getAssignmentById,
  deleteAssignment,
  updateAssignment,
  getAllAssignments,
  getAllAssignmentsByLevelId,
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

export default router;
