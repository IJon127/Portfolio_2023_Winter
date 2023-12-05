const fs = require("fs");
const express = require("express");
const router = express.Router();

// 1) LOAD DATA ==========================================
const about = JSON.parse(fs.readFileSync(`${__dirname}/../data/about.json`));

// 3) ROUTE HANDLERS =====================================
function getAbout(req, res) {
  res.status(200).json({
    status: "success",
    result: about.length,
    data: {
      about,
    },
  });
}

// 4) ROUTES =============================================
router.get("/", getAbout);

// 5) EXPORT ROUTER ======================================
module.exports = router;
