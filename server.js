// server.js
const path = require("path");
const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

const app = express();
const PORT = 3000;
const ADMIN_CODE = "SG22Rahmatinga";

// --- DB SETUP ---
const db = new Database("data.db");

db.prepare(`
  CREATE TABLE IF NOT EXISTS projects (
    char TEXT PRIMARY KEY
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS vacancies (
    id TEXT PRIMARY KEY,
    projectChar TEXT,
    title TEXT,
    location TEXT,
    status TEXT,
    peopleNeeded INTEGER,
    rate INTEGER,
    rateType TEXT,
    description TEXT,
    FOREIGN KEY (projectChar) REFERENCES projects(char)
  )
`).run();

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json());

// Serve all your existing site files from THIS folder
app.use(express.static(__dirname));

// --- API ROUTES ---

// Get all projects + vacancies
app.get("/api/data", (req, res) => {
  const projects = db.prepare("SELECT char FROM projects ORDER BY char").all();
  const vacancies = db.prepare("SELECT * FROM vacancies").all();
  res.json({ projects, vacancies });
});

// Add project
app.post("/api/projects", (req, res) => {
  const { char, code } = req.body;

  if (code !== ADMIN_CODE) {
    return res.status(403).json({ error: "Invalid coordinator code" });
  }

  const upper = String(char || "").toUpperCase().trim();
  if (!/^[A-Z]$/.test(upper)) {
    return res
      .status(400)
      .json({ error: "Project code must be a single letter A–Z" });
  }

  try {
    db.prepare("INSERT INTO projects (char) VALUES (?)").run(upper);
    res.json({ success: true, project: { char: upper } });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Project with this code already exists" });
  }
});

// Add vacancy
app.post("/api/vacancies", (req, res) => {
  const { vacancy, code } = req.body;

  if (code !== ADMIN_CODE) {
    return res.status(403).json({ error: "Invalid coordinator code" });
  }

  const id = "v_" + Date.now();

  try {
    db.prepare(
      `
      INSERT INTO vacancies 
      (id, projectChar, title, location, status, peopleNeeded, rate, rateType, description)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `
    ).run(
      id,
      vacancy.projectChar,
      vacancy.title,
      vacancy.location,
      vacancy.status,
      vacancy.peopleNeeded || 0,
      vacancy.rate || 0,
      vacancy.rateType || "netto",
      vacancy.description || ""
    );

    res.json({ success: true, vacancy: { ...vacancy, id } });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error adding vacancy" });
  }
});

// Delete vacancy
app.delete("/api/vacancies/:id", (req, res) => {
  const id = req.params.id;
  const { code } = req.body;

  if (code !== ADMIN_CODE) {
    return res.status(403).json({ error: "Invalid coordinator code" });
  }

  const info = db.prepare("DELETE FROM vacancies WHERE id = ?").run(id);
  if (info.changes === 0) {
    return res.status(404).json({ error: "Vacancy not found" });
  }

  res.json({ success: true });
});

// --- START SERVER ---
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
