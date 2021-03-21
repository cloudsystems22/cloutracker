"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnloackLoginUseCase = void 0;
const User_1 = require("../../../entities/User");
class UnloackLoginUseCase {
    constructor(unloackLoginReporitory) {
        this.unloackLoginReporitory = unloackLoginReporitory;
    }
    async execute(data, code) {
        const user = new User_1.UserSchema(data);
        const userUpdated = await this.unloackLoginReporitory.unloack(user, code);
        if (!userUpdated)
            return null;
        return true;
    }
}
exports.UnloackLoginUseCase = UnloackLoginUseCase;
