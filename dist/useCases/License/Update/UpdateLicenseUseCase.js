"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLicenseUseCase = void 0;
const License_1 = require("../../../entities/License");
class UpdateLicenseUseCase {
    constructor(licenseRepository) {
        this.licenseRepository = licenseRepository;
    }
    async execute(data) {
        const license = new License_1.LicenseSchema(data);
        const updateLicense = await this.licenseRepository.save(license);
        return updateLicense;
    }
}
exports.UpdateLicenseUseCase = UpdateLicenseUseCase;
