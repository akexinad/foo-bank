import supertest from "supertest";
import { mockData } from "./data/mockData";
import * as accountService from "../services/account.service";
import logger from "../utils/logger";
import createServer from "../utils/server";

const app = createServer();

describe("account", () => {
    /**
     * The tests are the only place where I would ever use the ts-ignore flag.
     * The TypeORM return types are not entirely correct, especially if the service
     * does not return an account list
     */

    describe("the account route", () => {
        const loggerInfoSpy = jest.spyOn(logger, "info");
        const loggerErrorSpy = jest.spyOn(logger, "error");

        describe("given that there are no accounts", () => {
            it("should return a 404", async () => {
                const accountServiceMock = jest
                    .spyOn(accountService, "findAccounts")
                    //@ts-ignore
                    .mockReturnValueOnce(undefined);

                const { statusCode, body } = await supertest(app).get(
                    "/foobank/accounts"
                );

                expect(accountServiceMock).toHaveReturnedWith(undefined);
                expect(loggerErrorSpy).toHaveBeenCalledTimes(1);
                expect(statusCode).toBe(404);
                expect(body).toStrictEqual({});
            });
        });

        describe("given that there are accounts", () => {
            it("should return a 200 with an account list", async () => {
                const accountServiceMock = jest
                    .spyOn(accountService, "findAccounts")
                    //@ts-ignore
                    .mockReturnValueOnce(mockData.accounts);

                const { statusCode, body } = await supertest(app).get(
                    "/foobank/accounts"
                );

                expect(accountServiceMock).toHaveBeenCalledTimes(1);
                expect(loggerInfoSpy).toHaveBeenCalledTimes(1);
                expect(statusCode).toBe(200);
                expect(body).toEqual(mockData.accounts);
            });
        });

        describe("given that typeorm throws an error", () => {
            it("should return a 500", async () => {
                const accountServiceMock = jest
                    .spyOn(accountService, "findAccounts")
                    //@ts-ignore
                    .mockReturnValueOnce(new Error("There was error"));

                try {
                    await supertest(app).get("/foobank/accounts");
                } catch (error) {
                    expect(loggerErrorSpy).toHaveBeenCalledTimes(1);
                    expect(accountServiceMock).toThrowError();
                }
            });
        });
    });
});
