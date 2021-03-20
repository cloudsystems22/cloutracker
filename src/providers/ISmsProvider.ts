export interface Isms {
    to: string;
    from: string;
    body: string;
}

export interface ISmsProvider {
    sendMsg(sms: Isms) : Promise<void>;
}
