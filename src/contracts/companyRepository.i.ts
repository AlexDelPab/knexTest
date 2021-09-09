import { Company } from "../entities/company";

export interface ICompanyRepository {
    GetCompanies(): Promise<Array<Company>>;
    GetCompany(id: number): Promise<Array<Company>>;
    CreateCompany(company: Company): Promise<number>;
}