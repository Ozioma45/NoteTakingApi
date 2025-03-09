# 📒 Simple Note-Taking API (TypeScript + Express + MongoDB)

A simple REST API for a note-taking application built using Node.js, Express, TypeScript, and MongoDB.

## 🚀 Features

- ✅ Create, Read, and Delete notes
- ✅ TypeScript for type safety
- ✅ MongoDB with Mongoose for data storage
- ✅ Error handling with custom error classes
- ✅ Environment variables using dotenv

---

## 📌 API Endpoints

### 📜 Notes Routes

| Method   | Endpoint         | Description         |
| -------- | ---------------- | ------------------- |
| `GET`    | `/api/notes`     | Get all notes       |
| `GET`    | `/api/notes/:id` | Get a specific note |
| `POST`   | `/api/notes`     | Create a new note   |
| `DELETE` | `/api/notes/:id` | Delete a note       |

---

## 📚 Usage

### ➤ Create a Note

**Request:**

```json
POST /api/notes
{
  "title": "My First Note",
  "content": "This is the content of my note."
}
```

**Response:**

```json
{
  "_id": "65b8f6e4a1b2c3d4e5f6g7h8",
  "title": "My First Note",
  "content": "This is the content of my note.",
  "createdAt": "2025-03-06T10:00:00.000Z",
  "updatedAt": "2025-03-06T10:00:00.000Z"
}
```

### ➤ Get All Notes

**Request:**

```sh
GET /api/notes
```

**Response:**

```json
[
  {
    "_id": "65b8f6e4a1b2c3d4e5f6g7h8",
    "title": "My First Note",
    "content": "This is the content of my note."
  }
]
```

### ➤ Delete a Note

**Request:**

```sh
DELETE /api/notes/65b8f6e4a1b2c3d4e5f6g7h8
```

**Response:**

```json
{
  "message": "Note deleted successfully"
}
```

---

## 🏗️ Project Structure

```
📂 note-taking-api
│── 📂 dist                 # Compiled JavaScript output
│   ├── 📂 models         # Mongoose schemas
│   ├── 📂 routes         # Express routes
│   ├── 📂 middleware     # Error handling
│   ├── server.js        # Main entry point (compiled)
│── 📂 src
│   ├── 📂 models         # Mongoose schemas
│   ├── 📂 routes         # Express routes
│   ├── 📂 middleware     # Error handling
│   ├── server.ts        # Main entry point
│── .env                 # Environment variables
│── package.json         # Dependencies and scripts
│── tsconfig.json        # TypeScript config
│── README.md            # Documentation
```

---

## 🧪 Testing

Use **Postman** or **cURL** to test the API.

---

## 🛠️ Built With

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Typed JavaScript
- **MongoDB** - NoSQL Database
- **Mongoose** - ODM for MongoDB

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 📞 Contact

For any inquiries or issues, reach out via:

- GitHub: [Ozioma Egole](https://github.com/Ozioma45)
- Email: oziomaegole@gmail.com
