"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowActiveLicenseUseCase = void 0;
class ShowActiveLicenseUseCase {
    constructor(licenseRepository) {
        this.licenseRepository = licenseRepository;
    }
    async execute(status) {
        const licenseActive = await this.licenseRepository.showActive(status);
        return licenseActive;
    }
}
exports.ShowActiveLicenseUseCase = ShowActiveLicenseUseCase;
