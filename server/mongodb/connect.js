import mongoose from "mongoose";

const connectToMongoDb = (dbUrl) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(dbUrl)
    .then(() => console.log("MONGO CONNECTION SUCCESSFUL"))
    .catch((err) => {
      console.error("MONGO CONNECTION FAILED");
      console.error(err);
    });
};

export default connectToMongoDb;
