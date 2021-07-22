import express from "express";
import Servers from "../models/servers.model.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const servers = await Servers.find();
    res.status(200).json(servers);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newServer = new Servers(body);
  try {
    await newServer.save();
    res.status(200).json(newServer);
  } catch (error) {
    res.status(404).json(error);
  }
});

export default router;
