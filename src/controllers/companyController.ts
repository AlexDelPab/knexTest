import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { controller, httpGet, httpPost } from "inversify-express-utils";
import { ICompanyRepository } from "../contracts/companyRepository.i";
import { TYPES } from "../inversify.types";

@controller("/companies")
export class CompanyController {
    constructor(@inject(TYPES.ICompanyRepository) private _repository: ICompanyRepository) {
    }

    @httpGet("/")
    async getCompanies(req: Request, res: Response) {
        const companies = await this._repository.GetCompanies();
        res.status(200).json(companies);
    }

    @httpGet("/:id")
    async getCompany(req: Request, res: Response) {
        const companies = await this._repository.GetCompany(parseInt(req.params.id));

        if (companies.length) {
            res.status(200).json(companies);
        } else {
            res.status(404).send('Could not find company with id ' + req.params.id);
        }
    }

    @httpPost("/")
    async createCompany(req: Request, res: Response) {
        const company = req.body;
        console.log(company);
        const id = await this._repository.CreateCompany(company);
        res.status(201).json({ id });
    }
}