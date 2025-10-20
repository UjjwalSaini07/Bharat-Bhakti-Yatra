import express from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js"; // Adjust the path if necessary

const router = express.Router();

// Public routes (anyone can access these)
router.get("/", getAllEvents);
router.get("/:id", getEventById);

// Private routes (only authenticated users can access these)
// You might want to add another middleware to check for admin role here in the future
router.post("/", verifyToken, createEvent);
router.put("/:id", verifyToken, updateEvent);
router.delete("/:id", verifyToken, deleteEvent);

export default router;