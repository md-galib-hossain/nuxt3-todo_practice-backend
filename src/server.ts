import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";


let server: Server
async function main() {
  try {
    await mongoose.connect(config.database_url!);
    server = app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
