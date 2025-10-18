import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true, 
    },

    description: {
      type: String,
      required: [true, "Event description is required"],
    },

    date: {
      type: Date,
      required: [true, "Event date is required"],
    },

    time: {
      type: String,
      required: [true, "Event time is required"],
    },

    location: {
      type: String,
      required: [true, "Event location is required"],
    },

    eventType: {
      type: String,
      required: [true, "Event type is required"],
      enum: {
        values: ["Puja", "Discourse", "Celebration", "Festival", "Other"],
        message: "{VALUE} is not a supported event type",
      },
    },

    organizer: {
      type: String,
      required: [true, "Organizer name is required"],
    },
  },
  {
    timestamps: true,
  }
);

// Create the Event model from the schema
export const Event = mongoose.model("Event", eventSchema);