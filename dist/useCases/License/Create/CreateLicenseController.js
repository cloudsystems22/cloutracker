"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLicenseController = void 0;
class CreateLicenseController {
    constructor(createLicenseUseCase) {
        this.createLicenseUseCase = createLicenseUseCase;
        this.generateSerial = () => {
            const license = [];
            const alph = 'ABCDEFGHIJLMNOPQRSTUVXYZabcdefghijlmnopqrstuvxyz0123456789';
            for (let i = 0; i < 10; i++) {
                license[i] = alph.charAt(Math.floor(Math.random() * alph.length));
            }
            return license.join('');
        };
    }
    async handle(req, res) {
        const { customer, description, users, services, totalLicense, Status } = req.body;
        const remoteIp = req.connection.remoteAddress || req.socket.remoteAddress;
        try {
            const newLicense = await this.createLicenseUseCase
                .execute({
                customer,
                description,
                ipAssign: remoteIp,
                dataAssign: new Date(),
                license: this.generateSerial(),
                users,
                services,
                totalLicense,
                Status,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            return res.status(200).send(newLicense);
        }
        catch (err) {
            return res.status(400).send({
                mensagem: `Erro ao cadastrar Licença ${err.message} - Unexped error!`
            });
        }
    }
}
exports.CreateLicenseController = CreateLicenseController;
