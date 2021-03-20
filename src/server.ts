import { app } from "./app";
require('dotenv').config();
import './entities/implementations/Conexao'

app.listen(process.env.PORT || 9001, () => {
    console.log("Ouvindo a porta 9001: http://localhost/9001")
})