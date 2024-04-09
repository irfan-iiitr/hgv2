import express from "express";

import {
  createTopic,
  getTopicsById,
  updateTopic,
  deleteTopic,
  getAllTopic,
  getTopicsByLevelId,
} from "../../controllers/topics.controller";
import { checkAdmin } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/", checkAdmin, createTopic);
router.get("/:id", getTopicsById);
router.get("/", getAllTopic);
router.get("/level/:levelId", getTopicsByLevelId);
router.delete("/:id", checkAdmin, deleteTopic);
router.patch("/:id", checkAdmin, updateTopic);

export default router;
