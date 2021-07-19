import express from "express";
import bcrypt from "bcryptjs";
import { Jwt } from "jsonwebtoken";
import userModel from "../models/user.model.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "A felhasználó nem létezik" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Jelszó nem megfelelő" });
    const token = Jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test"
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json(error);
  }
});
router.post("/register", async (req, res) => {
  const { email, password, confirmPassword, userName } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "A felhasználó már létezik" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "A jelszók nem egyeznek" });
    const hashedpassword = await bcrypt.hash(password, 12);
    const result = await userModel.create({
      email,
      password: hashedpassword,
      name: userName,
    });
    const token = Jwt.sign({ email: result.email, id: result._id }, "test");
    res.status(200).json(result, token);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
