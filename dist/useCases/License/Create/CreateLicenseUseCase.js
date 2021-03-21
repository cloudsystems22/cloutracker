"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLicenseUseCase = void 0;
const License_1 = require("../../../entities/License");
class CreateLicenseUseCase {
    constructor(licenseRepository) {
        this.licenseRepository = licenseRepository;
    }
    async execute(data) {
        const license = new License_1.LicenseSchema(data);
        const newLicense = await this.licenseRepository.create(license);
        return newLicense;
    }
}
exports.CreateLicenseUseCase = CreateLicenseUseCase;
