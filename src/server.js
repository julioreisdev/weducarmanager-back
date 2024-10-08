import express from "express";
import cors from "cors";
import testRouter from "./routes/testRoutes.js";

const server = express();

server.use(cors(), express.json());

server.use(testRouter);

const port = 8007;

server.listen(port, () => {
  console.log(`server listening in ${port} port`);
});
