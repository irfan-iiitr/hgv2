import express from "express";

const router = express.Router();

import userRoutes from "./user.routes";
import feedRoutes from "./feed.routes";
import wingRoutes from "./wing.routes";
import announcementRoutes from "./announcement.routes";
import assignmentRoutes from "./assignment.routes";
import projectRoutes from "./project.routes";
import levelRoutes from "./level.routes";
import topicsRoutes from "./topics.routes";
import subtopicsRoutes from "./subtopics.routes";

router.use("/users", userRoutes);
router.use("/feeds", feedRoutes);
router.use("/wings", wingRoutes);
router.use("/announcements", announcementRoutes);
router.use("/assignments", assignmentRoutes);
router.use("/projects", projectRoutes);
router.use("/level", levelRoutes);
router.use("/topics", topicsRoutes);
router.use("/subtopics", subtopicsRoutes);

export default router;
