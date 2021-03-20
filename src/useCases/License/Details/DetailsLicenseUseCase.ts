import { ILicenseRepository } from "../../../repositories/ILicenseRepository";

export class DetailsLicenseUseCase {
    constructor(
        private licenseRepository: ILicenseRepository
    ) { }

    async execute(id: string) {
        const licenseDetails = await this.licenseRepository.findById(id)
        return licenseDetails
    }
}