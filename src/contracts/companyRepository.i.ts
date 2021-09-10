import { Company } from "../entities/company";

export interface ICompanyRepository {
    GetCompanies(): Promise<Array<Company>>;
    GetCompany(id: number): Promise<Array<Company>>;
    CreateCompany(company: Company): Promise<number>;
    UpdateCompany(id: number, company: Company): Promise<null>;
    DeleteCompany(id: number): Promise<null>;
    GetCompanyByEmployeeId(employeeId: number): Promise<Company>;
    GetCompanyEmployeesMultipleResults(id: number): Promise<Array<Company>>;
    GetCompaniesEmployeesMultipleMapping(): Promise<Array<Company>>;
}