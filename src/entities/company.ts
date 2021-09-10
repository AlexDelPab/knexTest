import { ICompany } from "../contracts/company.i";
import { Employee } from "./employee";

export class Company implements ICompany{

    constructor(public Id: number, public Name: string, public Address: string, public Country: string, public Employees: Employee[]) {

    }

}