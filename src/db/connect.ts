import path from "path";
import { createConnection } from "typeorm";
import { Account } from "../models/account.model";
import { Transaction } from "../models/transaction.model";

export const connection = async () =>
    await createConnection({
        type: "postgres",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [Account, Transaction],
        synchronize: true,
        logging: true,
        migrations: [path.join(__dirname, "../migrations/*")]
    });
