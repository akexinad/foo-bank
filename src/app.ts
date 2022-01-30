import dotenv from "dotenv";
import "reflect-metadata";
import { connection } from "./db/connect";
import logger from "./utils/logger";
import createServer from "./utils/server";

(async () => {
    dotenv.config();

    const PORT = process.env.PORT;

    await connection().then((connection) => connection.runMigrations());

    const app = createServer();

    app.listen(PORT, () => {
        logger.info(`App listening on http://localhost:${PORT}`);
    });
})();
