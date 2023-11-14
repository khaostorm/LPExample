import * as express from "express";
import * as cors from "cors";
import { rootRouter } from "./routes";
const server = express();
server.use(cors());
server.use(express.json());
//Make Sure to put more specific routes above the Root Router
server.use("/", rootRouter);
export { server };
