import { Request, Response } from "express";
import {
    findAccounts,
    findAccountTransactions
} from "../services/account.service";
import { TransactionRequestQuery } from "../types";
import logger from "../utils/logger";

export const getAccounts = async (req: Request, res: Response) => {
    /**
     * We could use the request to check for authorisation at this
     * level ensuring that the user is authorised to see the accounts.
     */
    try {
        const accounts = await findAccounts();
        /**
         * Depending on the size of the list we
         * might need to consider pagination.
         */

        if (!accounts) {
            logger.error("Accounts not found.");
            return res.sendStatus(404);
        }

        /**
         * Returning the account with the most recent balance date.
         */
        // const accountsSorted = sortAccounts(accounts, "DESC");

        logger.info("Call to account service successful");

        return res.send(accounts);
    } catch (error) {
        logger.error(error);
        res.sendStatus(500);
    }
};

export const getAccountTransactions = async (
    req: Request<{}, {}, {}, TransactionRequestQuery>,
    res: Response
) => {
    /**
     * TODO: Validate Request parameters should be validated.
     */

    if (!req.query.accountNumber) {
        logger.error("Bad request.");
        return res.sendStatus(400);
    }

    try {
        /**
         * Again we would consider to use
         * pagination if there are many transactions.
         */

        const transactions = await findAccountTransactions(
            req.query.accountNumber,
            req.query.order ? req.query.order : "DESC"
        );

        if (!transactions || !transactions.length) {
            logger.error("Transactions not found");
            return res.sendStatus(404);
        }

        logger.info("Call to transaction service successful");

        return res.send(transactions);
    } catch (error) {
        logger.error(error);
        res.sendStatus(500);
    }
};
