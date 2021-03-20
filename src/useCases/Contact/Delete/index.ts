import { MongodbCustomerRepository } from "../../../repositories/implementations/MongodbCustomerRepository";
import { DeleteContatosController } from "./DeleteContatosController";
import { DeleteContatosUseCase } from "./DeleteContatosUseCase";

const mongodbCustomerRepository = new MongodbCustomerRepository();

const deleteContatosUseCase = new DeleteContatosUseCase(
    mongodbCustomerRepository,
)

const deleteContatosController = new DeleteContatosController(
    deleteContatosUseCase,
)

export { deleteContatosUseCase, deleteContatosController }