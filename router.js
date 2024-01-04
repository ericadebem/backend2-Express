import { express } from "express"
import { getAuto } from "./controler"

export const autoRouter = express.Router()

autoRouter.route("/:id").get(getAuto)