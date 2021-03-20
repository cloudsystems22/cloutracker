import { MongodbLicenseRepository } from "../../../repositories/implementations/MongodbLicenseRepository";
import { ShowActiveLicenseUseCase } from "./ShowActiveLicenseUseCase";
import { ShowActiveLicenseController } from "./ShowActiveLicenseController";

const mongodbLicenseRepository = new MongodbLicenseRepository

const showActiveLicenseUseCase = new ShowActiveLicenseUseCase(
    mongodbLicenseRepository,
)

const showActiveLicenseController = new ShowActiveLicenseController(
    showActiveLicenseUseCase,
)

export { showActiveLicenseUseCase, showActiveLicenseController }