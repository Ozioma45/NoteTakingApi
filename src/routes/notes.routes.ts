import { Router, Request, Response } from "express";
import Note from "../models/note.model";

const router = Router();

// Get notes by category
router.get("/categories/:categoryId", async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const notes = await Note.find({ categoryId });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get all notes
router.get("/", async (_req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get a specific note
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Create a new note
router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, content, categoryId } = req.body;
    if (!title || !content || !categoryId)
      return res
        .status(400)
        .json({ message: "Title, content, and categoryId are required" });

    const note = new Note({ title, content, categoryId });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete a note
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update a note
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { title, content, categoryId } = req.body;
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    note.title = title || note.title;
    note.content = content || note.content;
    note.categoryId = categoryId || note.categoryId;

    await note.save();
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
