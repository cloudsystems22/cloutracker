import { Router, Request, Response } from "express";
import { createCustomerController } from "../useCases/Customers/Create";
import { searchCustomerController } from "../useCases/Customers/Search";
import { detailsCustomerController } from "../useCases/Customers/Details";
import { showCustomerController } from "../useCases/Customers/ShowAll";
import { updateCustomerController } from "../useCases/Customers/Update";
import { createContatosController } from "../useCases/Contact/Create";
import { updateContatosController } from "../useCases/Contact/Update";
import { deleteContatosController } from "../useCases/Contact/Delete";

const routes = Router();

routes.get("/", (req:Request, res:Response) => {
    return showCustomerController.handle(req, res);
})

routes.post("/", (req:Request, res:Response) => {
    return createCustomerController.handle(req, res);
})

routes.get("/search/:descript", (req:Request, res:Response) => {
    return searchCustomerController.handler(req, res);
})

routes.get("/details/:id", (req:Request, res:Response) => {
    return detailsCustomerController.handler(req, res);
})

routes.put("/", (req:Request, res:Response) => {
    return updateCustomerController.handle(req, res);
})

//Contatos
routes.post("/contato", (req:Request, res:Response) => {
    return createContatosController.handle(req, res);
})

routes.put("/contato", (req:Request, res:Response) => {
    return updateContatosController.handle(req, res);
})

routes.delete("/contato", (req:Request, res:Response) => {
    return deleteContatosController.handle(req, res);
})

export default routes