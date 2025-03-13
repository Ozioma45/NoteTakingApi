"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const note_model_1 = __importDefault(require("../models/note.model"));
const router = (0, express_1.Router)();
// Get notes by category
router.get("/categories/:categoryId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId } = req.params;
    const notes = yield note_model_1.default.find({ categoryId });
    res.json(notes);
}));
// Get all notes
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield note_model_1.default.find();
    res.json(notes);
}));
// Get a specific note
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield note_model_1.default.findById(req.params.id);
    if (!note)
        return res.status(404).json({ message: "Note not found" });
    res.json(note);
}));
// Create a new note
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content } = req.body;
    if (!title || !content)
        return res.status(400).json({ message: "Title and content are required" });
    const note = new note_model_1.default({ title, content });
    yield note.save();
    res.status(201).json(note);
}));
// Delete a note
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield note_model_1.default.findByIdAndDelete(req.params.id);
    if (!note)
        return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted successfully" });
}));
// Update a note
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content, categoryId } = req.body;
    const note = yield note_model_1.default.findById(req.params.id);
    if (!note)
        return res.status(404).json({ message: "Note not found" });
    note.title = title || note.title;
    note.content = content || note.content;
    note.categoryId = categoryId || note.categoryId;
    yield note.save();
    res.json(note);
}));
exports.default = router;
