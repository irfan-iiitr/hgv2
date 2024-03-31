import express from "express";

import {
  createTopic,
  getTopicsById,
  updateTopic,
  deleteTopic,
  getAllTopic,
} from "../../controllers/topics.controller";
import { checkAdmin } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/", checkAdmin, createTopic);
router.get("/:id", getTopicsById);
router.get("/", getAllTopic);
router.delete("/:id", checkAdmin, deleteTopic);
router.patch("/:id", checkAdmin, updateTopic);

export default router;
