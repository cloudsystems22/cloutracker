"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsLicenseUseCase = void 0;
class DetailsLicenseUseCase {
    constructor(licenseRepository) {
        this.licenseRepository = licenseRepository;
    }
    async execute(id) {
        const licenseDetails = await this.licenseRepository.findById(id);
        return licenseDetails;
    }
}
exports.DetailsLicenseUseCase = DetailsLicenseUseCase;
