import { Router } from "express";
import Note from "../models/note.model";

const router = Router();

// Get notes by category
router.get("/categories/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  const notes = await Note.find({ categoryId });
  res.json(notes);
});

// Get all notes
router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Get a specific note
router.get("/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
});

// Create a new note
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content)
    return res.status(400).json({ message: "Title and content are required" });

  const note = new Note({ title, content });
  await note.save();
  res.status(201).json(note);
});

// Delete a note
router.delete("/:id", async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json({ message: "Note deleted successfully" });
});

// Update a note
router.put("/:id", async (req, res) => {
  const { title, content, categoryId } = req.body;

  const note = await Note.findById(req.params.id);
  if (!note) return res.status(404).json({ message: "Note not found" });

  note.title = title || note.title;
  note.content = content || note.content;
  note.categoryId = categoryId || note.categoryId;

  await note.save();
  res.json(note);
});

export default router;
