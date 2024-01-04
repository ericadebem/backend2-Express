import { response } from "express";
import { Autos } from "./model.js";

export const getAuto = async (req, res) => {
  try {
    const auto = await Autos.findById(req.params.id);
    auto
      ? res.status(201).json({ auto })
      : res.status(404).json({ msg: "Auto not found" });
  } catch (error) {
    console.error(error.msg);
    response.status(500).json(error);
  }
};
