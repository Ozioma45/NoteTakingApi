"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const notes_routes_1 = __importDefault(require("./routes/notes.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";
app.use(express_1.default.json());
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));
app.use("/api/notes", notes_routes_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to the Note-Taking API");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
