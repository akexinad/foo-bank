import {MigrationInterface, QueryRunner} from "typeorm";

export class AccountRecords1643184316981 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            insert into account ("accountNumber", "accountName", "accountType", "balanceDate", "currency", "openingAvailableBalance") values ('936966884', 'SGSavings855', 'Savings', '08/12/2021', 'SGD', 12569.21);
            insert into account ("accountNumber", "accountName", "accountType", "balanceDate", "currency", "openingAvailableBalance") values ('968129235', 'AUCurrent773', 'Current', '08/29/2021', 'AUD', 73736.81);
            insert into account ("accountNumber", "accountName", "accountType", "balanceDate", "currency", "openingAvailableBalance") values ('721588187', 'AUSavings207', 'Savings', '06/24/2021', 'AUD', 96174.78);
            insert into account ("accountNumber", "accountName", "accountType", "balanceDate", "currency", "openingAvailableBalance") values ('683270526', 'AUSavings792', 'Savings', '10/13/2021', 'AUD', 97217.4);
            insert into account ("accountNumber", "accountName", "accountType", "balanceDate", "currency", "openingAvailableBalance") values ('311850220', 'SGSavings640', 'Savings', '06/20/2021', 'SGD', 38123.68);
            insert into account ("accountNumber", "accountName", "accountType", "balanceDate", "currency", "openingAvailableBalance") values ('872266386', 'AUSavings321', 'Savings', '07/07/2021', 'AUD', 18892.29);
            insert into account ("accountNumber", "accountName", "accountType", "balanceDate", "currency", "openingAvailableBalance") values ('764558465', 'AUCurrent617', 'Current', '08/10/2021', 'AUD', 82472.87);
            insert into account ("accountNumber", "accountName", "accountType", "balanceDate", "currency", "openingAvailableBalance") values ('623214985', 'AUSavings207', 'Savings', '10/06/2021', 'AUD', 23993.96);
            insert into account ("accountNumber", "accountName", "accountType", "balanceDate", "currency", "openingAvailableBalance") values ('219063519', 'SGSavings270', 'Savings', '05/24/2021', 'SGD', 77420.47);
            insert into account ("accountNumber", "accountName", "accountType", "balanceDate", "currency", "openingAvailableBalance") values ('119168361', 'AUCurrent601', 'Current', '12/03/2021', 'AUD', 23760.49);           
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
