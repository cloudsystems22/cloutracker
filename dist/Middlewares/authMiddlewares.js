"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddlewares = void 0;
const endpoint_config_1 = __importDefault(require("../endpoint.config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class authMiddlewares {
    async handle(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader)
            return res.status(401).send({ error: 'Token não especificado!' });
        const parts = authHeader.split(' ');
        if (parts.length !== 2)
            return res.status(401).send({ error: 'Erro no token!' });
        const [scheme, token] = parts;
        if (!/^Bearer$/i.test(scheme))
            return res.status(401).send({ error: 'Token mal formatado!' });
        jsonwebtoken_1.default.verify(token, endpoint_config_1.default.appSecret, (err, decoded) => {
            if (err)
                return res.status(401).send({ error: 'Token inválido!' });
            req.body.userId = decoded;
            return next();
        });
    }
}
exports.authMiddlewares = authMiddlewares;
