import express from "express";

import {
  createProject,
  getProjectById,
  getAllProjects,
  updateProject,
  deleteProject,
} from "../../controllers/project.controller";

const router = express.Router();

router.post("/", createProject);
router.get("/:id", getProjectById);
router.get("/", getAllProjects);
router.delete("/:id", deleteProject);
router.patch("/:id", updateProject);

export default router;
