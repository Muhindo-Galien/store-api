require("dotenv").config();
const express = require("express");
const productRouter = require("./routes/products");
const connectDB = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const app = express();
require('express-async-errors')
const port = process.env.PORT;

// middleware
app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use("/api/v1/products", productRouter);

// products routes
app.use(notFound);
app.use(errorHandlerMiddleware);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
