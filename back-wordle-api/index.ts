import "reflect-metadata";
import express from "express";
import { useContainer, useExpressServer } from "routing-controllers";
import Container from "typedi";
import path from "path";
import { prisma } from "./utils/client";
import cors from "cors";
(async () => {
  await prisma.$connect();
  const app = express();

  useContainer(Container);
  app.use(express.json());
  app.use(cors());
  const controllersPath = "./src/services/**/*.controller.ts";
  useExpressServer(app, {
    controllers: [path.join(__dirname, controllersPath)],
  });
  app.listen(3001, () => {
    console.log("Server on port 3001");
  });
})();
