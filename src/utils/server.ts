import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { AccountRouter } from "../routes/account.route";

/**
 * Putting 'app' in it's own function
 * in this fashion makes it easier to test.
 */
const createServer = () => {
    const app = express();

    app.use(compression()); //Compress all routes
    app.use(helmet());
    app.use(cors());
    app.use(express.json());

    app.use("/foobank", AccountRouter);

    return app;
};

export default createServer;
