import { Request, Response, NextFunction} from "express"
import endpoint from '../endpoint.config'
import jwt from 'jsonwebtoken'

export class authMiddlewares{

    async handle(req:Request, res:Response, next:NextFunction){
        const authHeader = req.headers.authorization;

        if(!authHeader)
            return res.status(401).send({ error: 'Token não especificado!'});
    
        const parts = authHeader.split(' ');
        if(parts.length !== 2)
            return res.status(401).send({ error: 'Erro no token!'});

        const [ scheme, token ] = parts;

        if(!/^Bearer$/i.test(scheme))
            return res.status(401).send({ error: 'Token mal formatado!'});

        jwt.verify(token, endpoint.appSecret, (err, decoded) => {
            if(err) return res.status(401).send({ error: 'Token inválido!'});

            req.body.userId = decoded;
            return next();
        });

    }

}