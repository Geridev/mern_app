import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import serverRouter from "./routes/servers.js";
import userRouter from "./routes/users.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/servers", serverRouter);
app.use("/user", userRouter);

app.get("/", async (req, res) => {
  res.send("menj a /servers urlre");
});

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.listen(port, () => {
  console.log(`app listening to ${port}`);
});
