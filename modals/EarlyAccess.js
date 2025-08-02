// modals/EarlyAccess.js
import mongoose from "mongoose";

const EarlyAccessSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 100,
    },
    number: {
      type: String,
      required: false,
      maxlength: 20,
    },
  },
  { timestamps: true }
);

export default mongoose.models.EarlyAccess ||
  mongoose.model("EarlyAccess", EarlyAccessSchema);
