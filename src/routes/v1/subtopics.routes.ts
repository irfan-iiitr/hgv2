import express from "express";
import {
  createSubtopic,
  getSubtopicById,
  updateSubtopic,
  deleteSubtopic,
  getAllSubtopics,
  getSubtopicsByTopicId,
} from "../../controllers/subtopics.controller";
import { checkAdmin } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/", checkAdmin, createSubtopic);
router.get("/:id", getSubtopicById);
router.get("/", getAllSubtopics);
router.get("/topic/:topicId", getSubtopicsByTopicId);
router.delete("/:id", checkAdmin, deleteSubtopic);
router.patch("/:id", checkAdmin, updateSubtopic);

export default router;
