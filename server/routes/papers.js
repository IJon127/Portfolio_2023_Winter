const fs = require("fs");
const express = require("express");
const router = express.Router();

// 1) LOAD DATA ==========================================
const papers = JSON.parse(fs.readFileSync(`${__dirname}/../data/papers.json`));

// 3) ROUTE HANDLERS =====================================
function getPapers(req, res) {
  res.status(200).json({
    status: "success",
    result: papers.length,
    data: {
      papers,
    },
  });
}

function getPaperByName(req, res) {
  const paper = papers.find((el) => el.name === req.params.name);

  if (!paper) {
    return res.status(404).send("<h1>404...sorry I don't have this paper</h1>");
  }
  res.status(200).json({
    status: "success",
    data: {
      paper,
    },
  });
}

// 4) ROUTES =============================================
router.get("/", getPapers);
router.get("/:name", getPaperByName);

// 5) EXPORT ROUTER ======================================
module.exports = router;
