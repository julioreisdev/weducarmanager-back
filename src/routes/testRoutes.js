import express from "express";
import { helloWeducar } from "../controllers/testControllers.js";

const testRouter = express.Router();

testRouter.get("/test", helloWeducar);

export default testRouter;
