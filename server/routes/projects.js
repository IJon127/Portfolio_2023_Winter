const fs = require("fs");
const express = require("express");
const router = express.Router();

// 1) LOAD DATA ==========================================
const projects = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/projects.json`)
);

// 3) ROUTE HANDLERS =====================================
function getProjects(req, res) {
  res.status(200).json({
    status: "success",
    result: projects.length,
    data: {
      projects,
    },
  });
}

function getProjectByName(req, res) {
  const project = projects.find((el) => el.name === req.params.name);

  if (!project) {
    return res
      .status(404)
      .send("<h1>404...sorry I don't have this project</h1>");
  }
  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
}

// 4) ROUTES =============================================
router.get("/", getProjects);
router.get("/:name", getProjectByName);

// 5) EXPORT ROUTER ======================================
module.exports = router;
