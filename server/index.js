// Imports from packages
const express = require("express");
const mongoose = require("mongoose");

// Import from other files
const authRouter = require("./routes/auth");

// INIT
const PORT = 3000;
const app = express();

// Middleware
app.use(authRouter);

// Connections
// mongoose
//   .connect()
//   .then(() => {
//     console.log("Connection Successful");
//   })
//   .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Connected at port ${PORT}`);
});
