import { Router } from "express";
import { CompanyRepository } from "../src/repositories/companyRepository";

export const router: Router = Router();
const repository = new CompanyRepository();

router.get("/", async (req, res) => {
    const companies = await repository.GetCompanies();
    res.status(200).json(companies);
});

router.get("/:id", async (req, res) => {
    const companies = await repository.GetCompany(parseInt(req.params.id));

    if (companies.length) {
        res.status(200).json(companies);
    } else {
        res.status(404).send('Could not find company with id ' + req.params.id);
    }
});

router.post("/", async (req, res) => {
    const company = req.body;
    console.log(company);    
    const id = await repository.CreateCompany(company);
    res.status(201).json({ id });
});

export default router;
