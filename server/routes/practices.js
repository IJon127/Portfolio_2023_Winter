const fs = require("fs");
const express = require("express");
const router = express.Router();

// 1) LOAD DATA ==========================================
const practices = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/practices.json`)
);

// 3) ROUTE HANDLERS =====================================
function getPractices(req, res) {
  res.status(200).json({
    status: "success",
    result: practices.length,
    data: {
      practices,
    },
  });
}

// 4) ROUTES =============================================
router.get("/", getPractices);

// 5) EXPORT ROUTER ======================================
module.exports = router;
