import express from "express";

import {
  createWing,
  deleteWing,
  getAllWings,
  getWing,
  updateWing,
} from "../../controllers/wing.controller";

const router = express.Router();

// Wing Routes
router.post("/createWing", createWing);
router.get("/", getAllWings);
router.get("/:id", getWing);
router.delete("/:id", deleteWing);
router.patch("/:id", updateWing);

export default router;
