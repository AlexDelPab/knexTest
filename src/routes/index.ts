import { Router, Request, Response } from "express";
import company from "./companyRoutes";
import employee from "./employeeRoutes";

const routes = Router();

routes.use("/companies", company);
routes.use("/employees", employee);

export default routes;