import { IUserModel, UserSchema } from '../../../entities/User';
import { IMailProvider } from "../../../providers/IMailProvider";
import { ISmsProvider } from "../../../providers/ISmsProvider";
import { IUsersRepository } from '../../../repositories/IUsersReporitory';
import { ICreateUserRequestDTO, ICodeDTO } from './CreateUserDTO';
import endpoint from '../../../endpoint.config';

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
        private smsProvider: ISmsProvider,

    ) { }

    async execute(data: ICreateUserRequestDTO, code:ICodeDTO) {
        const userAlreadyExist = await this.usersRepository.findByEmail(data.email);
        if (userAlreadyExist) {
            throw new Error("Usuário já cadastrado")
        }

        const user: IUserModel = new UserSchema(data);
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
            body: `<p>Para liberar seu acesso digite o código: <b>${code.code}</b> no campo referente na tela. <br/> Caso voçê tenha fechado a tela referente, <a href='${endpoint.urlSite}/unlocklater'>Clique aqui</a> e informe o código acima para liberar seu acesso.</p>`
        })

        if (data.cell !== '') {
            await this.smsProvider.sendMsg({
                to: `+55${data.cell}`,
                from: '+14432412955',
                body: `Bem vindo a plataforma Cloud Tracker! Para liberar seu acesso por favor insira o codigo: ${code.code}`,
            })
        }

        return newUser

    }

}