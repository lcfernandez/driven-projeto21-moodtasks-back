import { Router } from "express";
import { signIn, signUp } from "../controllers/authenticationController";
import { signInSchemaValidation, signUpSchemaValidation } from "../middlewares/authValidationMiddleware";

export const authenticationRouter = Router();

authenticationRouter.post("/sign-in", signInSchemaValidation, signIn);
authenticationRouter.post("/sign-up", signUpSchemaValidation, signUp);
