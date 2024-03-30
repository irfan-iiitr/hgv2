import express from "express";

import {
  createAnnoucement,
  deleteAnnoucement,
  getAllAnnoucements,
  getAnnoucement,
  updateAnnoucement,
} from "../../controllers/annoucement.controller";
import { checkAdmin } from "../../middlewares/auth.middleware";

const router = express.Router();

router.post("/", checkAdmin, createAnnoucement);
router.get("/", getAllAnnoucements);
router.get("/:id", getAnnoucement);
router.delete("/:id", deleteAnnoucement);
router.patch("/:id", updateAnnoucement);

export default router;
