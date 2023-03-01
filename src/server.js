import app from ".";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { PORT, MONGODB_URL } = process.env;
console.log(process.env.PORT);
const server = app.listen(PORT, () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to mongodb");
      console.info("you server is running well pn port: ", PORT);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default server;
