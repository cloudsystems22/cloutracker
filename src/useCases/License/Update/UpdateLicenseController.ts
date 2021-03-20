import { Request, Response } from "express";
import { UpdateLicenseUseCase } from "./UpdateLicenseUseCase";

export class UpdateLicenseController {
    constructor(
        private UpdateLicenseUseCase: UpdateLicenseUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const {
            id,
            description,
            users,
            services,
            totalLicense,
            Status
        } = req.body;

        try {
            const updateLicense = await this.UpdateLicenseUseCase
                .execute(
                    {
                        _id: id,
                        description,
                        totalLicense,
                        Status,
                        updatedAt: new Date()
                    }
                );

            return res.status(200).send(updateLicense);

        } catch (err) {
            return res.status(400).send({
                mensagem: `Erro ao editar Licença ${err.message} - Unexped error!`
            })
        }

    }
}