import { MongodbLicenseRepository } from "../../../repositories/implementations/MongodbLicenseRepository";
import { CreateLicenseController } from "./CreateLicenseController";
import { CreateLicenseUseCase } from "./CreateLicenseUseCase";

const mongodbLicenseRepository = new MongodbLicenseRepository

const createLicenseUseCase = new CreateLicenseUseCase(
    mongodbLicenseRepository,
)

const createLicenseController = new CreateLicenseController(
    createLicenseUseCase,
)

export { createLicenseUseCase, createLicenseController }