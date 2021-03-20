import { IMailProvider, IMensagem } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export class UmblerMailProvider implements IMailProvider{
    private transporter: Mail;
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: "smtp.umbler.com",
            port: 587,
            auth: {
                user: "cadastro@cloudtracker.com.br",
                pass: "cloud@tracker99"
            }
        })
        
    }

    async sendMail(message: IMensagem): Promise<void>{
        await this.transporter.sendMail({
            to:{
                name: message.to.name,
                address: message.to.email
            },
            from:{
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body,
        })
    }

}