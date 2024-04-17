const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const rootRouter = require("./routes/index");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

// Listen on port defined in the PORT environment variable or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
