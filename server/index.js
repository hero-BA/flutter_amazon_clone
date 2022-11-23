// Imports from packages
const express = require("express");
const mongoose = require("mongoose");

// Import from other files
const authRouter = require("./routes/auth");

// INIT
const PORT = 3000;
const app = express();
const DB =
  "mongodb+srv://hero:hero123@cluster0.njdhh9v.mongodb.net/?retryWrites=true&w=majority";

// Middleware
app.use(express.json());
app.use(authRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at port ${PORT}`);
});
