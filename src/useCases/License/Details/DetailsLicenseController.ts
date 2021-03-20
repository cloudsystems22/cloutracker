import { Request, Response } from "express";
import { DetailsLicenseUseCase } from "./DetailsLicenseUseCase";

export class DetailsLicenseController {
    constructor(
        private detailsLicenseUseCase: DetailsLicenseUseCase
    ){}

    async handle(req:Request, res:Response): Promise<Response> {
        const { id } = req.params;

        try{
            const licenseDetails = await this.detailsLicenseUseCase.execute(id)
            return res.status(200).send(licenseDetails)
        } catch(err){
            return res.status(400).send({
                message: "Erro ao pesquisar Licensa: " + err.message || "Unexpected error."
            })
        }
    }

}