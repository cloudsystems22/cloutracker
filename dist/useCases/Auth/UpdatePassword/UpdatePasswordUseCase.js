"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordUseCase = void 0;
const User_1 = require("../../../entities/User");
class UpdatePasswordUseCase {
    constructor(updatePasswordRepository) {
        this.updatePasswordRepository = updatePasswordRepository;
    }
    async execute(data, code) {
        const user = new User_1.UserSchema(data);
        const userUpdated = await this.updatePasswordRepository.updatepassword(user, code);
        if (userUpdated == null)
            return false;
        return true;
    }
}
exports.UpdatePasswordUseCase = UpdatePasswordUseCase;
