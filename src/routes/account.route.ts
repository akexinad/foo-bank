import express from "express";
import {
    getAccounts,
    getAccountTransactions
} from "../controllers/account.controller";

export const AccountRouter = express.Router();

AccountRouter.route("/accounts").get(getAccounts);

AccountRouter.route("/transactions").get(getAccountTransactions);
