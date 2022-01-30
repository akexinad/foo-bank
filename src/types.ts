export type Account = {
    accountNumber: string;
    accountName: string;
    accountType: string;
    balanceDate: string;
    currency: string;
    openingAvailableBalance: string;
};

export type Transaction = {
    id: number;
    accountNumber: string;
    accountName: string;
    valueDate: string;
    currency: string;
    debitAmount: number;
    creditAmount: number;
    debitCredit: string;
    transactionNarrative: string;
};

export type TransactionRequestQuery = {
    accountNumber: string;
    order: 'ASC' | 'DESC';
}