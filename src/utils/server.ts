import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { AccountRouter } from "../routes/account.route";

const createServer = () => {
    const app = express();

    app.use(compression());
    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use("/foobank", AccountRouter);

    return app;
};

export default createServer;
