"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.default = {
    appSecret: (_a = process.env.APP_SECRET) !== null && _a !== void 0 ? _a : '',
    mongoUri: (_b = process.env.MONGO_ATLAS) !== null && _b !== void 0 ? _b : '',
    urlSite: process.env.URL_SYS,
    tokenKeyZen: process.env.TOKEN_ZENAPI_KEY,
    urlZenv: process.env.URL_ZENVIA,
    twilioAccountSID: (_c = process.env.TWILIO_ACCOUNT_SID) !== null && _c !== void 0 ? _c : '',
    twilioAuthToken: (_d = process.env.TWILIO_AUTH_TOKEN) !== null && _d !== void 0 ? _d : '',
};
