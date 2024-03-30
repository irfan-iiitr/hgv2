import express from "express";

const router = express.Router();

import userRoutes from "./user.routes";
import feedRoutes from "./feed.routes";
import wingRoutes from "./wing.routes";
import announcementRoutes from "./announcement.routes";

router.use("/users", userRoutes);
router.use("/feeds", feedRoutes);
router.use("/wings", wingRoutes);
router.use("/announcements", announcementRoutes);

export default router;
