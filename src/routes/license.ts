import { Router, Request, Response } from "express";
import { createLicenseController } from "../useCases/License/Create";
import { detailsLicenseController } from "../useCases/License/Details";
import { updateLicenseController } from "../useCases/License/Update";
import { showActiveLicenseController } from "../useCases/License/ShowActive";

const routes = Router();

routes.get("/licenses/:active", (req:Request, res:Response) => {
    return showActiveLicenseController.handle(req, res);
})

routes.get("/:id", (req:Request, res:Response) => {
    return detailsLicenseController.handle(req, res);
})

routes.post("/", (req:Request, res:Response) => {
    return createLicenseController.handle(req, res);
})

routes.put("/", (req:Request, res:Response) => {
    return updateLicenseController.handle(req, res);
})

export default routes