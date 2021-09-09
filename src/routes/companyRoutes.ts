import { Router, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { ICompanyRepository } from "../contracts/companyRepository.i";
import { TYPES } from "../inversify.types";

export const router: Router = Router();

@injectable()
class CompanyController {
    @inject(TYPES.ICompanyRepository) private _repository!: ICompanyRepository;

    constructor() {
        router.get('/', this.getCompanies);
        router.get('/:id', this.getCompany);
        router.post('/', this.createCompany);
    }

    async getCompanies(req: Request, res: Response) {
        const companies = await this._repository.GetCompanies();
        res.status(200).json(companies);
    }

    async getCompany(req: Request, res: Response) {
        const companies = await this._repository.GetCompany(parseInt(req.params.id));

        if (companies.length) {
            res.status(200).json(companies);
        } else {
            res.status(404).send('Could not find company with id ' + req.params.id);
        }
    }

    async createCompany(req: Request, res: Response) {
        const company = req.body;
        console.log(company);
        const id = await this._repository.CreateCompany(company);
        res.status(201).json({ id });
    }
}

new CompanyController();

export default router;
