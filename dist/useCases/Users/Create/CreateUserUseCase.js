"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../../entities/User");
const endpoint_config_1 = __importDefault(require("../../../endpoint.config"));
class CreateUserUseCase {
    constructor(usersRepository, mailProvider, smsProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
        this.smsProvider = smsProvider;
    }
    async execute(data, code) {
        const userAlreadyExist = await this.usersRepository.findByEmail(data.email);
        if (userAlreadyExist) {
            throw new Error("Usuário já cadastrado");
        }
        const user = new User_1.UserSchema(data);
        const newUser = await this.usersRepository.create(user);
        await this.mailProvider.sendMail({
            to: {
                name: data.userName,
                email: data.email
            },
            from: {
                name: "Cloud Tracker",
                email: "cadastro@cloudtracker.com.br",
            },
            subject: "Seja bem vindo a plataforma",
            body: `<p>Para liberar seu acesso digite o código: <b>${code.code}</b> no campo referente na tela. <br/> Caso voçê tenha fechado a tela referente, <a href='${endpoint_config_1.default.urlSite}/unlocklater'>Clique aqui</a> e informe o código acima para liberar seu acesso.</p>`
        });
        if (data.cell !== '') {
            await this.smsProvider.sendMsg({
                to: `+55${data.cell}`,
                from: '+14432412955',
                body: `Bem vindo a plataforma Cloud Tracker! Para liberar seu acesso por favor insira o codigo: ${code.code}`,
            });
        }
        return newUser;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
