import { ICompanyRepository } from "../contracts/companyRepository.i";
import { knex } from "../data/knex";
import { Company } from "../entities/company";

export class CompanyRepository implements ICompanyRepository {
    GetCompanies() {
        return knex('companies').select();
    }

    GetCompany(id: number) {
        return knex('companies').where('id', id).select();
    }

    CreateCompany(company: Company) {
        return knex('companies').insert(company, 'id');
    }
}