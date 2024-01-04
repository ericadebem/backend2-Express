import express from "express";
import { getAuto, postAuto } from "./controler.js";

export const autoRouter = express.Router();

autoRouter.route("/:id").get(getAuto);
autoRouter.route("/").post(postAuto);
