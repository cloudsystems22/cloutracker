import { Router, Request, Response } from "express";
const routes = Router();

routes.get("/", (req:Request, res:Response) => {
    return res.status(200).send({Ok: 'Bem vindo a API - Cloud Tracker'});
});

export default routes