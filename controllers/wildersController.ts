import express, { Request, Response, NextFunction } from "express";
import wilderService from "../services/wilderService";
import Wilder from "../models/Wilder";

const router = express.Router();

/**
 * GET /wilders
 * Retrieve all wilders
 */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const results: Array<Wilder> = await wilderService.read();
  res.json(results);
});

/**
 * GET /wilders/6141ed44e7b4f3eaab9359e8
 * Retrieve one wilder
 */
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const results: Wilder | null = await wilderService.readOne(req.params.id);
  res.json(results);
});

/**
 * POST /wilders
 * Create a new wilder
 */
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, city, skills } = req.body;
    const wilder: Wilder = await wilderService.create(name, city, skills);
    res.json(wilder);
  } catch (error) {
    next(error);
  }
});

/**
 * PUT /wilders/:id
 * Update a wilder
 */
router.put(
  "/:id",
  async (
    req: Request<{ id: string }, Wilder, Wilder>,
    res: Response,
    next: NextFunction
  ) => {
    const id = req.params.id;
    const { name, city, skills } = req.body;

    const wilderupdated: Wilder | null = await wilderService.update(
      id,
      name,
      city,
      skills
    );
    res.json(wilderupdated);
  }
);

/**
 * DELETE /wilders/:id
 * Delete a user
 */
router.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    await wilderService.delete(req.params.id);
    res.status(204).send();
  }
);

export default router;
