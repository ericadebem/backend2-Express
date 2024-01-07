import { Autos } from "./model.js";

export const getAuto = async (req, res) => {
  try {
    const auto = await Autos.findById(req.params.id);
    auto
      ? res.status(201).json({ auto })
      : res.status(404).json({ msg: "Auto not found" });
  } catch (error) {
    console.error(error.msg);
    res.status(500).json(error);
  }
};
export const postAuto = async (req, res) => {
  try {
    const auto = await Autos.create(req.body);
    res.status(201).json({ auto })
  }catch (error) {
    console.log(error.msg);
    res.status(500).json({ msg: "Auto not found" });
  }
}
export const getAllAuto = async (req, res) => {
  try {
    const auto = await Autos.find();
    res.status(201).json({ auto })
  }catch(error) {
    console.log(error.msg);
    res.status(500).json(error);
  }
}