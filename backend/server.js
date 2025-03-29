const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
