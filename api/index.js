const express = require("express");
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Established"))
  .catch((err) => {
    console.error(err);
  });

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("welcome friend");
});

app.get("/users", (req, res) => {
  res.send("welcome to users page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
