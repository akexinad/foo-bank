import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.model";

@Entity()
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    accountNumber!: string;

    @Column()
    accountName!: string;

    @Column({ type: 'date' })
    valueDate!: Date;

    @Column()
    currency!: string;

    @Column()
    debitAmount!: number;

    @Column()
    creditAmount!: number;

    @Column()
    debitCredit!: string;

    @Column("text")
    transactionNarrative!: string;

    @ManyToOne(() => Account, (account) => account.transactions)
    account!: Account;
}
