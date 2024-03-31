import express from "express";
import {
  createSubtopic,
  getSubtopicById,
  updateSubtopic,
  deleteSubtopic,
  getAllSubtopics,
} from "../../controllers/subtopics.controller";
import { checkAdmin } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/", checkAdmin, createSubtopic);
router.get("/:id", getSubtopicById);
router.get("/", getAllSubtopics);
router.delete("/:id", checkAdmin, deleteSubtopic);
router.patch("/:id", checkAdmin, updateSubtopic);

export default router;
