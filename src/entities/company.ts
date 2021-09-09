import { Employee } from "./employee";

export class Company {

    constructor(public Id: number, public Name: string, public Address: string, public Country: string, public Employees: Employee[]) {

    }

}