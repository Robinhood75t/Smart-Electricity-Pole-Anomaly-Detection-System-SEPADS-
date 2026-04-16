const express = require("express");
const cors = require("cors");
const readingRoutes = require("./src/router/readingRoute");
const alertRoutes = require("./src/router/alertRoute");
const baselineRoutes = require("./src/router/baselineRoute");
const poleRoutes = require("./src/router/poleRoute")
const app = express();


app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
console.log("app.js is running"); //debuging statement
app.use("/api/readings", readingRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/baseline", baselineRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/poles", poleRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("⚡ Electricity Monitoring API Running");
});


module.exports = app;