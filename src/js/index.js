"use strict";

const express = require("express");
const projectRouter = require("./routers/project.router");
const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/api", projectRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
