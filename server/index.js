import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import serverRouter from "./routes/servers.js";
import userRouter from "./routes/users.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/servers", serverRouter);
app.use("/user", userRouter);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(port, () => console.log(`app listening to ${port}`)))
  .catch((error) => console.log(error.message));
