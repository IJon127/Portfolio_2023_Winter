const fs = require("fs");
const express = require("express");
const router = express.Router();

// 1) LOAD DATA ==========================================

// 3) ROUTE HANDLERS =====================================
function getContact(req, res) {
  res.status(200).send("Contact page");
}

function postContact(req, res) {
  res.status(201).send("email sent!");
}

// 4) ROUTES =============================================
router.route("/").get(getContact).post(postContact);

// 5) EXPORT ROUTER ======================================
module.exports = router;
