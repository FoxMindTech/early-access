import mongoose from "mongoose";

const EarlyAccessSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    number: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.EarlyAccess ||
  mongoose.model("EarlyAccess", EarlyAccessSchema);
