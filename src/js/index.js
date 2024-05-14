"use strict";

const express = require("express");
const pg = require("pg");
const PORT = 3000;

const app = express();
app.use(express.json());

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "pupsiki",
  password: "mrfletgg2009",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.json("Connected to server");
});

app.post("/project", async (req, res) => {
  const { id, title, status, description } = req.body;
  try {
    const project = await db.query(
      "INSERT INTO pupsiki.project (id, title, status, description) values ($1, $2, $3, $4) RETURNING *",
      [id, title, status, description]
    );
    res.json(project.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});
app.get("/project", async (req, res) => {
  try {
    const project = await db.query("SELECT * FROM pupsiki.project");
    res.json(project.rows);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.get("/project/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const project = await db.query(
      "SELECT * FROM pupsiki.project WHERE id = $1",
      [id]
    );

    if (!project.rows.length) throw new Error("Record is not found");

    res.json(project.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});

app.patch("/project/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  if (data.id) delete data.id;

  try {
    for (const [key, value] of Object.entries(data)) {
      await db.query(`UPDATE pupsiki.project SET ${key} = $1 WHERE id = $2`, [
        value,
        id,
      ]);
    }

    const project = await db.query(
      "SELECT * FROM pupsiki.project WHERE id = $1",
      [id]
    );

    res.json(project.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});
app.delete("/project/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const project = await db.query(
      "SELECT * FROM pupsiki.project WHERE id = $1",
      [id]
    );

    if (!project.rows.length) throw new Error("Record is not found");

    await db.query("DELETE FROM pupsiki.project WHERE id = $1", [id]);
    res.json(project.rows[0]);
  } catch (err) {
    res.status(404).json(err.message);
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
