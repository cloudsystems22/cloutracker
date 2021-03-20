import { Request, Response } from "express";
import { ShowActiveLicenseUseCase } from "./ShowActiveLicenseUseCase";

export class ShowActiveLicenseController {
    constructor(
        private showActiveLicenseUseCase: ShowActiveLicenseUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { active } = req.params

        try {
            const licenseActive = await this.showActiveLicenseUseCase
                .execute(parseInt(active))
                
            return res.status(200).send(licenseActive);
        } catch (err) {
            return res.status(400).send({
                message: "Erro ao carregar licensas: " + err.message || "Unexpected error."
            })
        }
    }
}