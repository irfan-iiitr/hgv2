import express from "express";

import {
  addCordinator,
  createWing,
  deleteWing,
  getAllWings,
  getWing,
  updateCordinator,
  updateWing,
} from "../../controllers/wing.controller";

const router = express.Router();

// Wing Routes
router.post("/createWing", createWing);
router.get("/", getAllWings);
router.get("/:id", getWing);
router.delete("/:id", deleteWing);
router.patch("/:id", updateWing);
router.patch("/addCoordinator/:id", addCordinator);
router.patch("/replaceCoordinator/:id", updateCordinator);
export default router;
