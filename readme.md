# 📒 Simple Note-Taking API (TypeScript + Express + MongoDB)

A simple REST API for a note-taking application built using Node.js, Express, TypeScript, and MongoDB.

## 🚀 Live API

**Base URL:** [https://notetakingapi-ruui.onrender.com](https://notetakingapi-ruui.onrender.com)

---

## 🛠️ Features

- **Create, Read, Update, and Delete (CRUD) notes**
- **Categories for notes**
- **Type Safety with TypeScript**
- **MongoDB Persistence using Mongoose**
- **Custom Middleware for Validation**
- **Logging Middleware to Track API Requests**
- **Error Handling with Custom Typed Classes**

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Ozioma45/NoteTakingApi.git
cd NoteTakingApi
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Create a `.env` File

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Start the Development Server

```sh
npm run dev
```

The API will be running on `http://localhost:5000`

---

## 📌 API Endpoints

| Method   | Endpoint                            | Description           |
| -------- | ----------------------------------- | --------------------- |
| `POST`   | `/api/categories`                   | Create a category     |
| `POST`   | `/api/notes`                        | Create a new note     |
| `GET`    | `/api/categories`                   | Get all categories    |
| `GET`    | `/api/notes`                        | Get all notes         |
| `GET`    | `/api/notes/:id`                    | Get a specific note   |
| `GET`    | `/api/notes/categories/:categoryId` | Get notes by category |
| `PUT`    | `/api/notes/:id`                    | Update a note         |
| `DELETE` | `/api/notes/:id`                    | Delete a note         |

---

## 📚 Usage

### ➤ Create a Note

**Request:**

```json
POST /api/notes
{
  "title": "Meeting Notes",
  "content": "Discussed project updates.",
  "categoryId": "65f00a8b47a3c4d9e2a7c6d3"
}
```

**Response:**

```json
{
  "_id": "65f00a8b47a3c4d9e2a7c6e5",
  "title": "Meeting Notes",
  "content": "Discussed project updates.",
  "categoryId": "65f00a8b47a3c4d9e2a7c6d3",
  "createdAt": "2025-03-06T12:00:00.000Z",
  "updatedAt": "2025-03-06T12:00:00.000Z",
  "__v": 0
}
```

### ➤ Create a Category

**Request:**

```json
POST /api/categories
{
  "name": "Work"
}

```

**Response:**

```json
{
  "_id": "65f00a8b47a3c4d9e2a7c6d3",
  "name": "Work",
  "__v": 0
}
```

### ➤ Get a specific note

**Request:**

```sh
GET /api/notes/67d3bf17c6a0a16680b5855f
```

**Response:**

```json
{
  "_id": "67d3bf17c6a0a16680b5855f",
  "title": "Updated Meeting Notes",
  "content": "Added discussion points.",
  "categoryId": "67d32b26f4d018c9e0ebcd77",
  "createdAt": "2025-03-14T05:31:03.976Z",
  "updatedAt": "2025-03-14T05:36:56.283Z",
  "__v": 0
}
```

### ➤ Update a Note

**Request:**

```json
PUT /api/notes/65f00a8b47a3c4d9e2a7c6e5
{
  "title": "Updated Meeting Notes",
  "content": "Added discussion points.",
  "categoryId": "65f00a8b47a3c4d9e2a7c6d3"
}
```

**Response:**

```json
{
  "_id": "65f00a8b47a3c4d9e2a7c6e5",
  "title": "Updated Meeting Notes",
  "content": "Added discussion points.",
  "categoryId": "65f00a8b47a3c4d9e2a7c6d3",
  "createdAt": "2025-03-06T12:00:00.000Z",
  "updatedAt": "2025-03-06T12:05:00.000Z",
  "__v": 0
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
    "_id": "67d3bf17c6a0a16680b5855f",
    "title": "Meeting Notes",
    "content": "Discussed project updates.",
    "categoryId": "67d32b26f4d018c9e0ebcd77",
    "createdAt": "2025-03-14T05:31:03.976Z",
    "updatedAt": "2025-03-14T05:36:56.283Z",
    "__v": 0
  }
]
```

### ➤ Get All Notes

**Request:**

```sh
GET /api/categories
```

**Response:**

```json
[
  {
    "_id": "67d32b26f4d018c9e0ebcd77",
    "name": "Work",
    "__v": 0
  }
]
```

### ➤ Get Note by Category

**Request:**

```sh
GET /api/notes/categories/65f00a8b47a3c4d9e2a7c6d3
```

**Response:**

```json
[
  {
    "_id": "65f00a8b47a3c4d9e2a7c6e5",
    "title": "Meeting Notes",
    "content": "Discussed project updates.",
    "categoryId": "65f00a8b47a3c4d9e2a7c6d3",
    "createdAt": "2025-03-06T12:00:00.000Z",
    "updatedAt": "2025-03-06T12:00:00.000Z",
    "__v": 0
  }
]
```

### ➤ Delete a Note

**Request:**

```sh
DELETE /api/notes/67d3bf17c6a0a16680b5855f
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

## 🧪 Testing with Postman

1. Open **Postman**.
2. Set the **Base URL** to: `https://notetakingapi-ruui.onrender.com`
3. Use the above endpoints to send requests and test the API.

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

- GitHub: [@Ozioma45](https://github.com/Ozioma45)
- Email: oziomaegole@gmail.com
