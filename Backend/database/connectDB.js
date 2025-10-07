import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.MONGODB_URI;

if (!dbUrl) {
  console.error("❌ Error: MONGODB_URI is not defined in environment variables.");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Successfully connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
