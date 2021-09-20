import { NextFunction, Request, Response } from "express";

import express from "express";
import mongoose from "mongoose";
import errorHandler from "./tools/errorsHandler";
import wilderController from "./controllers/wildersController";
const app = express();

app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(new Date());
  console.log(req.body);
  next();
});

mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb", {
    autoIndex: true,
  })
  .then(() => console.log('Connected'))
  .catch(err => console.log(err));

app.use('/wilders', wilderController);

app.use(errorHandler);

app.listen(3000, () => console.log("Server started on 3000"));

export {}