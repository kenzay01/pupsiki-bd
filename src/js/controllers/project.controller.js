"use strict";
const db = require("../db");

class ProjectController {
  async createProject(req, res) {
    const { id, title, status, description } = req.body;
    try {
      const project = await db.query(
        "INSERT INTO pupsiki.project (id, title, status, description) values ($1, $2, $3, $4) RETURNING *",
        [id, title, status, description]
      );
      await res.json(project.rows[0]);
    } catch (err) {
      ProjectController.handleError(err, res);
    }
  }
  async getProjects(req, res) {
    try {
      const project = await db.query("SELECT * FROM pupsiki.project");
      res.json(project.rows);
    } catch (err) {
      ProjectController.handleError(err, res);
    }
  }

  async getProjectById(req, res) {
    const id = req.params.id;
    try {
      const project = await db.query(
        "SELECT * FROM pupsiki.project WHERE id = $1",
        [id]
      );

      if (!project.rows.length) throw new Error("Record is not found");

      res.json(project.rows[0]);
    } catch (err) {
      ProjectController.handleError(err, res);
    }
  }
  async editeProject(req, res) {
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
      ProjectController.handleError(err, res);
    }
  }
  async deleteProject(req, res) {
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
      ProjectController.handleError(err, res);
    }
  }
  static handleError(err, res) {
    const errorMessage = err.message;
    console.log("Error: " + errorMessage);
    res.status(404).json({ errorMessage });
  }
}
module.exports = new ProjectController();
