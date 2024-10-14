import express from "express";
import cors from "cors";
import testRouter from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors(), express.json());
app.use(testRouter);
app.use(authRoutes);

export default app;
