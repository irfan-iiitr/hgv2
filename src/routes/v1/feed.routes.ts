import express from "express";
const router = express.Router();
import { checkAdmin } from "../../middlewares/auth.middleware";

import {
  createFeed,
  upvotesFeed,
  deleteFeed,
  getAllFeeds,
  getFeed,
} from "../../controllers/feed.controller";

// Feed Routes
router.post("/", createFeed);
router.post("/upvote/:id", upvotesFeed);
router.delete("/:id", deleteFeed);
router.get("/:id", getFeed);
router.get("/", checkAdmin, getAllFeeds);

export default router;
