"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require('dotenv').config();
require("./entities/implementations/Conexao");
app_1.app.listen(process.env.PORT || 9001, () => {
    console.log("Ouvindo a porta 9001: http://localhost/9001");
});
