import { createQueryBuilder } from "typeorm";

export const findAccounts = async () =>
    await createQueryBuilder("Account")
        .orderBy("Account.balanceDate", "DESC")
        .getMany();

export const findAccountTransactions = async (
    accountNumber: string,
    order: "ASC" | "DESC"
) =>
    await createQueryBuilder("Transaction")
        .where("Transaction.accountNumber = :accountNumber", { accountNumber })
        .orderBy("Transaction.valueDate", order)
        .getMany();
