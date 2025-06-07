import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getStreamToken, createStreamUser, getUserDetails } from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/token", protectRoute, getStreamToken);
router.post("/user", protectRoute, createStreamUser);
router.get("/user/:userId", protectRoute, getUserDetails);

export default router;
