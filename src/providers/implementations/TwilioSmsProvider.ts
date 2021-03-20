import { ISmsProvider, Isms } from "../ISmsProvider";
import twilio from 'twilio';
import endpoint from "../../endpoint.config"

const accountSid = endpoint.twilioAccountSID;
const authToken = endpoint.twilioAuthToken;

export class TwilioSmsProvider implements ISmsProvider{
    constructor(
        private client = new twilio.Twilio(accountSid, authToken)
    ){}
  
    async sendMsg(sms: Isms) : Promise<void>{
        await this.client.messages.create({
            body: sms.body,
            to: sms.to,
            from: sms.from,
        }).then(response => console.log(response.sid))
    }
    
}
