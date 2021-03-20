import { MongodbLicenseRepository } from "../../../repositories/implementations/MongodbLicenseRepository";
import { UpdateLicenseController } from "./UpdateLicenseController";
import { UpdateLicenseUseCase } from "./UpdateLicenseUseCase";

const mongodbLicenseRepository = new MongodbLicenseRepository

const updateLicenseUseCase = new UpdateLicenseUseCase(
    mongodbLicenseRepository,
)

const updateLicenseController = new UpdateLicenseController(
    updateLicenseUseCase,
)

export { updateLicenseUseCase, updateLicenseController }