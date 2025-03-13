import { Router } from "express";
import Category from "../models/category.model";

const router = Router();

// Get all categories
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// Create a new category
router.post("/", async (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({ message: "Category name is required" });

  const category = new Category({ name });
  await category.save();
  res.status(201).json(category);
});

export default router;
