require("dotenv/config");
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require("mongoose");
const {dbInitialization} = require('./utils')
const userRouter = require("./routers/userRouter")
const todoRouter = require("./routers/todoRouter")

const app = express();

// npm install swagger-ui-express swagger-jsdoc express

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const { swaggerOptionsConfig } = require("./utils/swagger");

const PORT = process.env.PORT || 8080;

const swaggerOptions = swaggerOptionsConfig;

const swaggerDocs =swaggerJsDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/users", userRouter);
app.use("/todos", todoRouter);

// 404 route
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

const DB_URL = process.env.DATABASE_URL;

mongoose

  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(PORT, async () => {
      console.log("Listening to port"+PORT);
      console.log("DB Connection Successfull");
      await dbInitialization();
    })
  })
  .catch((err) => {
    console.log("Error in connecting to DB:", err);
  });
