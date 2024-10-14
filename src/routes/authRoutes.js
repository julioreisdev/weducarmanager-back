import express from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signInSchema } from "../schemas/authSchemas.js";
import { signInController } from "../controllers/authControllers.js";

const authRoutes = express.Router();

authRoutes.post("/entrar", validateSchema(signInSchema), signInController);

export default authRoutes;
