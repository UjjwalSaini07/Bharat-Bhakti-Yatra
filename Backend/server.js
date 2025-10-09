import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import path from "path";
import connectDB from "./database/connectDB.js";
import authRoutes from "./routers/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    message: "Server is running",
  });
});

const startServer = async () => {
  try {
    await connectDB();
    console.log(chalk.green.bold("✅ MongoDB Connected"));

    app.use("/api/auth", authRoutes);

    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname, "/frontend/dist")));

      app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
      });
    }

    const httpServer = app.listen(PORT, () => {
      console.clear();
      console.log(`${chalk.green.bold('\n=========================================')}`);
      console.log(`${chalk.green.bold('🚀 Server Status: ')}${chalk.cyan.bold('Online')}`);
      console.log(`${chalk.green.bold('🌐 Listening on: ')}${chalk.yellow.underline(`http://localhost:${PORT}`)}`);
      console.log(`${chalk.green.bold('📅 Started at: ')}${chalk.magenta(new Date().toLocaleString())}`);
      console.log(`${chalk.green.bold('=========================================\n')}`);
    });

    httpServer.on('close', () => {
      console.log(chalk.red.bold('\n========================================='));
      console.log(chalk.red.bold('🛑 Server Status: ') + chalk.yellow.bold('Offline'));
      console.log(chalk.red.bold('🔔 Server has been closed.'));
      console.log(chalk.red.bold('=========================================\n'));
    });

    process.on('SIGINT', () => {
      console.log(chalk.blue.bold('Gracefully shutting down the server...'));
      httpServer.close(() => {
        console.log(chalk.blue.bold('Server shut down complete.'));
        process.exit(0);
      });
    });

  } catch (err) {
    console.error(chalk.red.bold("❌ Failed to start server:"), err.message);
    process.exit(1);
  }
};

// Start the server
startServer();

app.get("/", (req, res) => {
  res.send("Welcome to Bharat-Bhakti-Yatra - Backend!");
});
