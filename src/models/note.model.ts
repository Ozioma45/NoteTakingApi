import mongoose from "mongoose";

// Define TypeScript Interface
export interface INote {
  title: string;
  content: string;
  categoryId: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define Mongoose Schema
const noteSchema = new mongoose.Schema<INote>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

// Create Mongoose Model
const Note = mongoose.model<INote>("Note", noteSchema);

export default Note;
