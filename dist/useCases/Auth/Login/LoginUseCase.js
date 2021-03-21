"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = void 0;
//import { ILoginRequestDTO } from './LoginDTO'
class LoginUseCase {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    async execute(email, password) {
        const userExist = await this.authRepository.login(email, password);
        if (!userExist) {
            throw new Error("Usuário inexistente ou login bloqueado!");
        }
        return userExist;
    }
}
exports.LoginUseCase = LoginUseCase;
