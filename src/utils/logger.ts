import dayjs from "dayjs";
import pino from "pino";

const logger = pino({
    transport: {
        target: "pino-pretty",
        options: {
            colorzie: true
        }
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
});

export default logger;
