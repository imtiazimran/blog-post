import app from "./app";
import config from "./config";
import mongoose from "mongoose";

async function db() {
  try {
    await mongoose.connect(config.connection_string as string);

    app.listen(config.port, () => {
      console.log(` app listening on port ${config.port as unknown as number}`);
    });
  } catch (err) {
    console.log(err);
  } 
}

db();
