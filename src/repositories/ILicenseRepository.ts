import { ILicenseModel, LicenseSchema } from "../entities/License";

export interface ILicenseRepository {
    create(license: ILicenseModel): Promise<ILicenseModel>
    save(license: ILicenseModel): Promise<ILicenseModel>
    findById(id: String): Promise<ILicenseModel>
    showAll(): Promise<ILicenseModel[]>
    showActive(status: Number): Promise<ILicenseModel[]>
}