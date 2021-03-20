import { Router, Request, Response, request } from "express"
import { loginController } from '../useCases/Auth/Login'
import { loginRecoverController } from '../useCases/Auth/LoginRecover'
import { unloackLoginController } from '../useCases/Auth/UnlockLogin'
import { updatePassorwdController } from '../useCases/Auth/UpdatePassword'

const routes = Router();

routes.get("/", (req:Request, res:Response) => {
    return res.status(200).send({Ok: 'API - Cloud Tracker / authenication...'});
});

routes.get("/:email/:type", (req:Request, res:Response) => {
    return loginRecoverController.handler(req, res)
});

routes.post("/", (req:Request, res:Response) => {
    return loginController.handle(req, res)
});

routes.put("/active", (req:Request, res:Response) => {
    return unloackLoginController.handler(req, res)
});

routes.put("/updatepassword", (req:Request, res:Response) => {
    return updatePassorwdController.handler(req, res);
})


export default routes