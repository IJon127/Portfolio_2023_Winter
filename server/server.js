const express = require("express");
const cors = require("cors");
const path = require("path");

const worksRoutes = require(`${__dirname}/routes/projects`);
const practicesRoutes = require(`${__dirname}/routes/practices`);
const aboutRoutes = require(`${__dirname}/routes/about`);
const papersRoutes = require(`${__dirname}/routes/papers`);
const contactRoutes = require(`${__dirname}/routes/contact`);

const app = express();

// 1) LOAD DATA ==========================================

// 2) MIDDLEWARES ========================================
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// 3) ROUTE HANDLERS =====================================
const root = path.join(__dirname, "build");
app.use(express.static(root));

function getApiRoot(req, res) {
  res.status(200).send("<p>Api root from NODE.js</>");
}

// 4) ROUTES =============================================
app.get("/api/", getApiRoot);
app.use("/api/projects", worksRoutes);
app.use("/api/practices", practicesRoutes);
app.use("/api/papers", papersRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

// 5) START SERVER ========================================
const PORT = 5300;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
