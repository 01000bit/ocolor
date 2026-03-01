import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("registrations.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS registrations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT NOT NULL,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/register", (req, res) => {
    const { name, email, phone, message } = req.body;
    
    if (!name || !phone) {
      return res.status(400).json({ error: "이름과 연락처는 필수입니다." });
    }

    try {
      const stmt = db.prepare("INSERT INTO registrations (name, email, phone, message) VALUES (?, ?, ?, ?)");
      const result = stmt.run(name, email, phone, message);
      res.json({ success: true, id: result.lastInsertRowid });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ error: "등록 중 오류가 발생했습니다." });
    }
  });

  app.get("/api/registrations", (req, res) => {
    try {
      const rows = db.prepare("SELECT * FROM registrations ORDER BY created_at DESC").all();
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: "조회 중 오류가 발생했습니다." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
