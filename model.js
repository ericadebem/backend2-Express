import mongoose from "mongoose";

const AutoSchema = new mongoose.Schema(
  {
    autoName: String,
    brand: String,
    age: Number,
  },
  {
    versionKey: false,
    collection: "autos",
  }
);

export const Autos = mongoose.model("Autos", AutoSchema);
