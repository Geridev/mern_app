import express from "express";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await userModel.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = Jwt.sign(
      { email: oldUser.email, id: oldUser._id },
      process.env.SECRET
    );

    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, userName } = req.body;
  try {
    const oldUser = await userModel.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userModel.create({
      email,
      password: hashedPassword,
      name: userName,
    });

    const token = Jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
