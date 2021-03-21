"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioSmsProvider = void 0;
const twilio_1 = __importDefault(require("twilio"));
const endpoint_config_1 = __importDefault(require("../../endpoint.config"));
const accountSid = endpoint_config_1.default.twilioAccountSID;
const authToken = endpoint_config_1.default.twilioAuthToken;
class TwilioSmsProvider {
    constructor(client = new twilio_1.default.Twilio(accountSid, authToken)) {
        this.client = client;
    }
    async sendMsg(sms) {
        await this.client.messages.create({
            body: sms.body,
            to: sms.to,
            from: sms.from,
        }).then(response => console.log(response.sid));
    }
}
exports.TwilioSmsProvider = TwilioSmsProvider;
