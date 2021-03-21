"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UmblerMailProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class UmblerMailProvider {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: "smtp.umbler.com",
            port: 587,
            auth: {
                user: "cadastro@cloudtracker.com.br",
                pass: "cloud@tracker99"
            }
        });
    }
    async sendMail(message) {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body,
        });
    }
}
exports.UmblerMailProvider = UmblerMailProvider;
