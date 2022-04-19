const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const postRouter = require("./routes/postRoutes");



const app = express();
app.use(express.json());

const start = async () => {
  dbConnect();
};

app.use("/", postRouter);

app.listen(5000, () => console.log("Server up"));

start();
