import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("alma");
});

export default router;
