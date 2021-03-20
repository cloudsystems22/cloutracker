import { ILicenseModel, LicenseSchema } from "../../../entities/License";
import { ILicenseRepository } from "../../../repositories/ILicenseRepository";
import { ICreateLicenseRequestDTO } from "./CreateLicenseDTO";

export class CreateLicenseUseCase {
    constructor(
        private licenseRepository: ILicenseRepository
    ) { }

    async execute(data: ICreateLicenseRequestDTO) {
        const license: ILicenseModel = new LicenseSchema(data)
        const newLicense = await this.licenseRepository.create(license)

        return newLicense
    }
}
