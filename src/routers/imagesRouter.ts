import { Router } from "express";
import { create, remove } from "../controllers/imagesController";
import { imagesSchemaValidation } from "../middlewares/imagesValidationMiddleware";

export const imagesRouter = Router();

imagesRouter.delete("/images/:id", remove);
imagesRouter.post("/images", imagesSchemaValidation, create);
