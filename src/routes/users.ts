import { Router, Request, Response } from "express";
import { createUserController } from "../useCases/Users/Create";
import { updateUserController } from '../useCases/Users/Update';
import { showUserController } from '../useCases/Users/ShowAll';
import { searchUserController } from "../useCases/Users/Search";

const routes = Router();

routes.get("/", (req:Request, res:Response) => {
    return showUserController.handler(req, res);
})

routes.post("/", (req:Request, res:Response) => {
    return createUserController.handle(req, res);
});

routes.get("/:descript", (req:Request, res:Response) => {
    return searchUserController.handler(req, res);
})

routes.put('/', (req:Request, res:Response) => {
    return updateUserController.handler(req, res);
})

export default routes