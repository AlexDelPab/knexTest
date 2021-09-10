import { injectable } from "inversify";
import { ICompanyRepository } from "../contracts/companyRepository.i";
import { db } from "../data/knex";
import { Company } from "../entities/company";

@injectable()
export class CompanyRepository implements ICompanyRepository {

    GetCompanies() {
        return db('companies').select();
    }

    GetCompany(id: number) {
        return db('companies').where('id', id).select();
    }

    CreateCompany(company: Company) {
        return db('companies').insert(company, 'id');
    }

    UpdateCompany(id: number, company: Company): Promise<null> {
        console.log(id);
        console.log(company);

        return db('companies').where({ id: id }).update({ name: company.Name, address: company.Address, country: company.Country });
    }


    DeleteCompany(id: number): Promise<null> {
        return db('companies').where({id: id}).del();
    }

    // Use of Stored procedure is not available in knex, so we use raw query instead
    GetCompanyByEmployeeId(employeeId: number): Promise<Company> {
        const procedureName = "GetCompanyByEmployeeId";
        return db.raw(`EXEC ${procedureName} ?`, [employeeId])
    }


    GetCompanyEmployeesMultipleResults(id: number): Promise<Company[]> {
        throw new Error("Method not implemented.");
    }


    GetCompaniesEmployeesMultipleMapping(): Promise<Company[]> {
        throw new Error("Method not implemented.");
    }
}