import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { IMailProvider } from "../../../providers/IMailProvider";
import bcrypt from "bcryptjs"

export class LoginRecoverUseCase{
    constructor(
        private authRepository:IAuthRepository,
        private mailProvider: IMailProvider,
    ){}

    generateCode = () =>{
        const token = []
        const alph = 'ABCDEFGHIJLMNOPQRSTUVXYZ0123456789'
        for(let i = 0; i < 6; i++ ){
            token[i] = alph.charAt(Math.floor(Math.random() * alph.length));
        }
        return token.join('')
    }

    async execute(email:string, type:string){
        const userExist = await this.authRepository.recover(email)
        if(!userExist) 
            throw new Error("Usuário inexistente!")

        if(type == 'recover'){
            const code = this.generateCode()
            userExist.passwordResetToken = await bcrypt.hashSync(code, 10);
            const passwordToken = await this.authRepository.passwordToken(userExist);
    
            await this.mailProvider.sendMail({
                to:{
                    name: userExist.userName,
                    email: userExist.email
                },
                from:{
                    name: "Cloud Tracker",
                    email: "cadastro@cloudtracker.com.br",
                },
                subject: "Recuperação de senha",
                body: `<p>Entre com o código: <b>${code}</b> para alterar sua senha.</p>`
            })

        } else if(type == 'unlocklater') {
            return userExist
        }

        return userExist 
    }

}