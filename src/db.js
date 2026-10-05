import mongoose from "mongoose";
import dns from "node:dns";

// Fix for Windows DNS blocking mongodb+srv lookups
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch {
  // ignore
}

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not configured");

  await mongoose.connect(uri);
  console.log("MongoDB connected");
}
