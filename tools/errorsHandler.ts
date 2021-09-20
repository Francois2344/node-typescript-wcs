import { NextFunction, Request, Response } from "express";

const error = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send("Something went wrong");
};

export default error;