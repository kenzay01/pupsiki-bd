const Router = require("express");
const router = new Router();
const projectController = require("../controllers/project.controller");

router.post("/project", projectController.createProject);
router.get("/project", projectController.getProjects);
router.get("/project/:id", projectController.getProjectById);
router.patch("/project/:id", projectController.editeProject);
router.delete("/project/:id", projectController.deleteProject);

module.exports = router;
