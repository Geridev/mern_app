import express from "express";
import mongoose from "mongoose";

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

router.post("/", auth, async (req, res) => {
  const server = req.body;
  const newServer = new Servers({
    ...server,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newServer.save();
    res.status(200).json(newServer);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.patch("/:id", auth, async (req, res) => {
  try {
    const update = await Servers.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const deleteserver = await Servers.findByIdAndRemove(req.params.id);
    res.status(200).json(deleteserver);
  } catch (error) {
    res.status(404).json(error);
  }
});

export default router;
