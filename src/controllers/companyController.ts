import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { BaseHttpController, controller, httpDelete, httpGet, httpPost, httpPut, requestParam } from "inversify-express-utils";
import { ICompanyRepository } from "../contracts/companyRepository.i";
import { TYPES } from "../inversify.types";

@controller("/companies")
export class CompanyController extends BaseHttpController {
    constructor(@inject(TYPES.ICompanyRepository) private _repository: ICompanyRepository) {
        super();
    }

    @httpGet("/")
    async getCompanies() {
        const companies = await this._repository.GetCompanies();
        return this.ok(companies);
    }

    @httpGet("/:id")
    async getCompany(@requestParam("id") id: number) {
        const companies = await this._repository.GetCompany(id);

        if (companies.length) {
            return this.ok(companies);
        } else {
            return this.notFound();
        }
    }

    @httpPost("/")
    async createCompany(req: Request, res: Response) {
        const company = req.body;
        const id = await this._repository.CreateCompany(company);
        res.status(201).json({ id });
    }

    @httpPut("/:id")
    async updateCompany(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const company = req.body;
        this._repository.UpdateCompany(id, company);
        return this.ok();
    }

    @httpDelete("/:id")
    async deleteCompany(@requestParam("id") id: number) {
        await this._repository.DeleteCompany(id);
        return this.ok();
    }

    @httpGet("/employee/:employeeId")
    async getCompanyByEmployeeId(@requestParam("employeeId") employeeId: number) {
        const companies = await this._repository.GetCompanyByEmployeeId(employeeId);
        return this.ok(companies);
    }
}