import { Request, Response } from "express";
import { CreateLicenseUseCase } from "./CreateLicenseUseCase";

export class CreateLicenseController {
    constructor(
        private createLicenseUseCase: CreateLicenseUseCase
    ) { }

    generateSerial = () => {
        const license = []
        const alph = 'ABCDEFGHIJLMNOPQRSTUVXYZabcdefghijlmnopqrstuvxyz0123456789'
        for (let i = 0; i < 10; i++) {
            license[i] = alph.charAt(Math.floor(Math.random() * alph.length));
        }
        return license.join('')
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const {
            customer,
            description,
            users,
            services,
            totalLicense,
            Status
        } = req.body;

        const remoteIp = req.connection.remoteAddress || req.socket.remoteAddress;

        try {
            const newLicense = await this.createLicenseUseCase
                .execute(
                    {
                        customer,
                        description,
                        ipAssign: remoteIp!,
                        dataAssign: new Date(),
                        license: this.generateSerial(),
                        users,
                        services,
                        totalLicense,
                        Status,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    }
                )
            return res.status(200).send(newLicense);

        } catch (err) {

            return res.status(400).send({
                mensagem: `Erro ao cadastrar Licença ${err.message} - Unexped error!`
            })
        }

    }
}