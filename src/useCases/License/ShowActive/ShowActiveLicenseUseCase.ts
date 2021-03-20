import { ILicenseRepository } from "../../../repositories/ILicenseRepository";

export class ShowActiveLicenseUseCase {
    constructor(
        private licenseRepository: ILicenseRepository
    ) { }

    async execute(status: Number) {
        const licenseActive = await this.licenseRepository.showActive(status)
        return licenseActive;
    }
}