import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send({ message: "welcome to my server" });
});

app.use("/**", (_, res) => {
  res.json({ error: { status: 404, message: "Router not found" } });
});

export default app;
