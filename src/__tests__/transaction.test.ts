import supertest from "supertest";
import * as accountService from "../services/account.service";
import logger from "../utils/logger";
import createServer from "../utils/server";
import { mockData } from "./data/mockData";

const app = createServer();

describe("transaction", () => {
    const loggerInfoSpy = jest.spyOn(logger, "info");
    const loggerErrorSpy = jest.spyOn(logger, "error");

    describe("the transaction route", () => {
        it("should return a 404", async () => {
            const transactionServiceMock = jest
                .spyOn(accountService, "findAccountTransactions")
                //@ts-ignore
                .mockReturnValueOnce([]);

            const { statusCode, body } = await supertest(app).get(
                "/foobank/transactions/?accountNumber=12345"
            );

            expect(transactionServiceMock).toHaveBeenCalled();
            expect(loggerErrorSpy).toHaveBeenCalledTimes(1);
            expect(statusCode).toBe(404);
            expect(body).toStrictEqual({});
        });

        it("should return a 200 with a transaction list", async () => {
            const transactionServiceMock = jest
                .spyOn(accountService, "findAccountTransactions")
                //@ts-ignore
                .mockReturnValueOnce(mockData.transactions);

            const { statusCode, body } = await supertest(app).get(
                "/foobank/transactions/?accountNumber=5100786801"
            );

            expect(transactionServiceMock).toHaveBeenCalledTimes(1);
            expect(loggerInfoSpy).toHaveBeenCalledTimes(1);
            expect(statusCode).toBe(200);
            expect(body).toEqual(mockData.transactions);
        });

        it("should return a 500", async () => {
            const transactionServiceMock = jest
                .spyOn(accountService, "findAccountTransactions")
                //@ts-ignore
                .mockReturnValueOnce(new Error("There was error"));

            try {
                await supertest(app).get("/foobank/transactions/foo");
            } catch (error) {
                expect(loggerErrorSpy).toHaveBeenCalledTimes(1);
                expect(transactionServiceMock).toThrowError();
            }
        });

        it("should throw a 400 if there is no accountNumber in the request", async () => {
            jest.spyOn(
                accountService,
                "findAccountTransactions"
            );

            const { statusCode } = await supertest(app).get(
                "/foobank/transactions/?foo=132"
            );

            expect(loggerErrorSpy).toHaveBeenCalledTimes(1);
            expect(statusCode).toBe(400);
        });
    });
});
