"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
const User_1 = require("../../../entities/User");
class UpdateUserUseCase {
    constructor(usersReporitory) {
        this.usersReporitory = usersReporitory;
    }
    async execute(data) {
        const user = new User_1.UserSchema(data);
        const userUpdated = await this.usersReporitory.save(user);
        if (!userUpdated)
            return null;
        const userUpdate = await this.usersReporitory.findById(user.id);
        return userUpdate;
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
