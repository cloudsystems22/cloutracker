import { MongodbCustomerRepository } from "../../../repositories/implementations/MongodbCustomerRepository";
import { DetailsCustomerController } from "./DetailsCustomerController";
import { DetailsCustomerUseCase } from "./DetailsCustomerUseCase";

const mongodbCustomerRepository = new MongodbCustomerRepository()

const detailsCustomerUseCase = new DetailsCustomerUseCase(
    mongodbCustomerRepository
)

const detailsCustomerController = new DetailsCustomerController(
    detailsCustomerUseCase
)

export { detailsCustomerUseCase, detailsCustomerController }