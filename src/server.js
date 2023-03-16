import app from ".";
import dotenv from "dotenv";
import mongoose from "mongoose";



dotenv.config();

const { PORT, MONGODB_URL } = process.env;
console.log(process.env.PORT);
const server = app.listen(PORT, () => {
  // mongoose.set("strictQuery", false);
  mongoose.set('strictQuery', true);
  mongoose
    .connect(MONGODB_URL)
    .then(() => {
      console.log("connected to mongodb");
      console.info("Server is running on port: ", PORT);
    })
    .catch((err) => {
      console.log(err);
    });
});


export default server;
