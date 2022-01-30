import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Transaction } from "./transaction.model";

@Entity()
export class Account extends BaseEntity {
    @PrimaryColumn()
    accountNumber!: string;

    @Column()
    accountName!: string;

    @Column()
    accountType!: string;

    @Column({ type: "date" })
    balanceDate!: Date;

    @Column()
    currency!: string;

    @Column()
    openingAvailableBalance!: number;

    @OneToMany(() => Transaction, (transaction) => transaction.account)
    transactions!: Transaction[];
}
