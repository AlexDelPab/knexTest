import { Container } from "inversify";
import { ICompanyRepository } from "./contracts/companyRepository.i";
import { CompanyRepository } from "./repositories/companyRepository";
import { TYPES } from "./inversify.types";

const diContainer = new Container();
diContainer.bind<ICompanyRepository>(TYPES.ICompanyRepository).to(CompanyRepository);

export { diContainer };
