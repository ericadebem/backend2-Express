import mongoose from "mongoose";

const AutoSchema = new mongoose.Schema(
  {
    AutoName: String,
    Brand: String,
    age: Number,
  },
  {
    versionKey: false,
    collation: "autos",
  }
);

export const Autos = mongoose.model("Autos", AutoSchema);
