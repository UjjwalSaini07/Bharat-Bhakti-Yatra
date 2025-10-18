import { Event } from "../models/event.model.js";
import mongoose from "mongoose";


export const createEvent = async (req, res) => {
  try {
    const { title, description, date, time, location, eventType, organizer } =
      req.body;

    // Basic validation
    if (
      !title ||
      !description ||
      !date ||
      !time ||
      !location ||
      !eventType ||
      !organizer
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newEvent = new Event({
      title,
      description,
      date,
      time,
      location,
      eventType,
      organizer,
    });

    await newEvent.save();

    res.status(201).json({
      success: true,
      message: "Event created successfully!",
      event: newEvent,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ success: false, message: error.message });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({}).sort({ date: 1 }).lean(); // Sort by upcoming date
    res.status(200).json({ success: true, events });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid event ID format" });
    }

    const event = await Event.findById(id).lean();

    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    res.status(200).json({ success: true, event });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;

     if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid event ID format" });
    }

    // Whitelist updatable fields
    const allowedFields = (({ title, description, date, time, location, eventType, organizer }) => 
      ({ title, description, date, time, location, eventType, organizer }))(req.body);

    const updatedEvent = await Event.findByIdAndUpdate(id, allowedFields, {
      new: true, // Return the updated document
      runValidators: true, // Ensure updates adhere to schema validation
    });

    if (!updatedEvent) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      event: updatedEvent,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({ success: false, message: error.message });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};


export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

     if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ success: false, message: "Invalid event ID format" });
    }

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res
        .status(404)
        .json({ success: false, message: "Event not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};