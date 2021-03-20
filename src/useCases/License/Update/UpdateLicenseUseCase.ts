import { ILicenseModel, LicenseSchema } from "../../../entities/License";
import { ILicenseRepository } from "../../../repositories/ILicenseRepository";
import { IUpdateLicenseRequestDTO } from "./UpdateLicenseDTO";

export class UpdateLicenseUseCase {
    constructor(
        private licenseRepository: ILicenseRepository
    ) { }

    async execute(data: IUpdateLicenseRequestDTO) {
        const license: ILicenseModel = new LicenseSchema(data)
        const updateLicense = await this.licenseRepository.save(license)

        return updateLicense
    }
}