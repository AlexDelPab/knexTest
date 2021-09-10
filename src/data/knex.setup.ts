import { knex } from 'knex';

declare module 'knex/types/tables' {
    interface ICompany {
        Id: number,
        Name: string,
        Address: string,
        Country: string
    }

    interface Tables {
        companies: ICompany
    }
}