import mongoose from "mongoose";

const serversSchema = mongoose.Schema({
  title: { type: String, require: true },
  ip: { type: String, unique: true },
  port: { type: Number, require: true },
  game: { type: String, require: true },
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Servers = mongoose.model("Servers", serversSchema);

export default Servers;
