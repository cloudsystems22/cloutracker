import { MongodbLicenseRepository } from "../../../repositories/implementations/MongodbLicenseRepository";
import { DetailsLicenseController } from "./DetailsLicenseController";
import { DetailsLicenseUseCase } from "./DetailsLicenseUseCase";


const mongodbLicenseRepository = new MongodbLicenseRepository

const detailsLicenseUseCase = new DetailsLicenseUseCase(
    mongodbLicenseRepository,
)

const detailsLicenseController = new DetailsLicenseController(
    detailsLicenseUseCase,
)

export { detailsLicenseUseCase, detailsLicenseController }