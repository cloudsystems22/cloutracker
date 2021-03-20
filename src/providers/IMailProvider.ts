export interface IAddress {
    email: string;
    name: string;
}

export interface IMensagem {
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMail(message: IMensagem) : Promise<void>;
}