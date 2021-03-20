import { ILicenseModel, LicenseSchema } from "../../entities/License";
import { ILicenseRepository } from "../ILicenseRepository";

export class MongodbLicenseRepository implements ILicenseRepository {
    async create(license: ILicenseModel): Promise<ILicenseModel> {
        const newLicense = await LicenseSchema.create(license)
        return newLicense!
    }
    async save(license: ILicenseModel): Promise<ILicenseModel> {
        const updateLicense = await LicenseSchema
            .findByIdAndUpdate(
                {
                    _id: license.id
                },
                {
                    $set:{
                        _id: license._id,
                        description: license.description,
                        totalLicense: license.totalLicense,
                        Status: license.Status,
                        updatedAt: license.updatedAt
                    }
                },
                {
                    new: true
                }
            );

        return updateLicense!
    }

    async findById(id: string): Promise<ILicenseModel> {
        const licenseExist = await LicenseSchema
            .findById(
                {
                    _id: id
                }
            ).populate('customer')

        return licenseExist!
    }

    async showAll(): Promise<ILicenseModel[]> {
        const licenseAll = await LicenseSchema.find()
        return licenseAll!
    }

    async showActive(status: Number): Promise<ILicenseModel[]> {
        const licenseActive = await LicenseSchema
            .find(
                {
                    Status: status
                }
            )
        return licenseActive!
    }
}