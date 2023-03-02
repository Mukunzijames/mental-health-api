import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import therapistRoute from "./routers/therapistRoute"
import swaggerDocumention from "./happer/documentations"
const app = express();

app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ message: "welcome to my server" });
});
swaggerDocumention(app);
app.use("/Document", express.static("../Document"));

app.use("/api/therapist/", therapistRoute)

app.use("/**", (req, res) => {
  res.json({ error: { status: 404, message: "Router not found" } });
});

;

export default app;

