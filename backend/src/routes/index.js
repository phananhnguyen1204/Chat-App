import express from "express";
import authRoutes from "./auth.route.js";
import UserRoutes from "./user.route.js";
import ConversationRoutes from "./conversation.route.js";
import MessageRoutes from "./message.route.js";
//Entry point of our routes
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/conversation", ConversationRoutes);
router.use("/message", MessageRoutes);
router.use("/user", UserRoutes);
export default router;
