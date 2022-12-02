// Imports from packages
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");

// Import from other files
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// INIT
const PORT = 3000;
const app = express();
const DB =
  "mongodb+srv://hero:hero123@cluster0.njdhh9v.mongodb.net/?retryWrites=true&w=majority";

// Middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

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
