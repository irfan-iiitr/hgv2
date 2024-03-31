import express from "express";

import {
  createLevel,
  getLevelById,
  deleteLevel,
  updateLevel,
  getAllLevels,
} from "../../controllers/level.controller";
import { checkAdmin } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/", checkAdmin, createLevel);
router.get("/:id", getLevelById);
router.get("/", getAllLevels);
router.delete("/:id", checkAdmin, deleteLevel);
router.patch("/:id", checkAdmin, updateLevel);

export default router;
