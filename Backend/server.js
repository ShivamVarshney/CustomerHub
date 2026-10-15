
require("dotenv").config();

const dns = require("node:dns");

const mongoDnsServers = (process.env.MONGODB_DNS_SERVERS || "1.1.1.1,8.8.8.8")
  .split(",")
  .map((server) => server.trim())
  .filter(Boolean);

try {
  dns.setServers(mongoDnsServers);
  console.log("MongoDB DNS resolvers configured", {
    serverCount: mongoDnsServers.length,
  });
} catch (err) {
  console.error("MongoDB DNS resolver configuration failed", {
    errorName: err?.name || "UnknownError",
    errorCode: err?.code || "unavailable",
  });
  process.exit(1);
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./Routes/authRoutes.js");
const customerRoutes = require("./Routes/customerRoutes.js");
const dashboardRoutes = require("./Routes/dashboardRoutes.js");
const workspaceRoutes = require("./Routes/workspaceRoutes.js");

const app = express();

// Allow the frontend origins configured in Render.
const allowedOrigins = (
  process.env.CLIENT_URLS ||
  process.env.CLIENT_URL ||
  "http://localhost:5173"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/workspaces", workspaceRoutes);

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Customer Management API Running",
  });
});

// MongoDB Connection
console.log("Connecting to MongoDB...");

mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", {
      errorName: err?.name || "UnknownError",
      errorCode: err?.code || "unavailable",
    });
  });
