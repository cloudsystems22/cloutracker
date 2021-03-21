"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbLicenseRepository = void 0;
const License_1 = require("../../entities/License");
class MongodbLicenseRepository {
    async create(license) {
        const newLicense = await License_1.LicenseSchema.create(license);
        return newLicense;
    }
    async save(license) {
        const updateLicense = await License_1.LicenseSchema
            .findByIdAndUpdate({
            _id: license.id
        }, {
            $set: {
                _id: license._id,
                description: license.description,
                totalLicense: license.totalLicense,
                Status: license.Status,
                updatedAt: license.updatedAt
            }
        }, {
            new: true
        });
        return updateLicense;
    }
    async findById(id) {
        const licenseExist = await License_1.LicenseSchema
            .findById({
            _id: id
        }).populate('customer');
        return licenseExist;
    }
    async showAll() {
        const licenseAll = await License_1.LicenseSchema.find();
        return licenseAll;
    }
    async showActive(status) {
        const licenseActive = await License_1.LicenseSchema
            .find({
            Status: status
        });
        return licenseActive;
    }
}
exports.MongodbLicenseRepository = MongodbLicenseRepository;
