import express from "express";

import {
  addCoordinator,
  createWing,
  deleteWing,
  getAllWings,
  getWing,
  deleteCoordinator,
  updateWing,
} from "../../controllers/wing.controller";

const router = express.Router();

// Wing Routes
router.post("/createWing", createWing);
router.get("/", getAllWings);
router.get("/:id", getWing);
router.delete("/:id", deleteWing);
router.patch("/:id", updateWing);
router.patch("/addCoordinator/:id", addCoordinator);
router.delete("/deleteCoordinator/:id", deleteCoordinator);
export default router;
