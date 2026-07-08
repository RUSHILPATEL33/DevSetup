import mongoose from "mongoose";

const uri =
  "mongodb+srv://rushilp274:rushilpatel33@mern-backend.tbpz9hy.mongodb.net/devsetupdoctor?retryWrites=true&w=majority&appName=mern-backend";

try {
  await mongoose.connect(uri);
  console.log("✅ Connected!");
  await mongoose.disconnect();
} catch (err) {
  console.error("❌ Error:");
  console.error(err);
}