require('dotenv').config();
export default{
    appSecret: process.env.APP_SECRET ?? '',
    mongoUri: process.env.MONGO_ATLAS ?? '',
    urlSite: process.env.URL_SYS,
    tokenKeyZen: process.env.TOKEN_ZENAPI_KEY,
    urlZenv: process.env.URL_ZENVIA,

    twilioAccountSID: process.env.TWILIO_ACCOUNT_SID ?? '',
    twilioAuthToken: process.env.TWILIO_AUTH_TOKEN ?? '',
}