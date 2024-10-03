import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
//application routes
app.use("/api/v1", router);


app.get("/", (req: Request, res: Response) => {
  res.send("Hey root route working!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
