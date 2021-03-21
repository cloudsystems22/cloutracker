"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbAuthRepository = void 0;
const User_1 = require("../../entities/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
class MongodbAuthRepository {
    async login(email, password) {
        const userExist = await User_1.UserSchema.findOne({ email, active: 0 });
        if (!userExist)
            return undefined;
        if (bcrypt_1.default.compareSync(password, userExist.password)) {
            return userExist;
        }
        return undefined;
    }
    async recover(email) {
        const userExist = await User_1.UserSchema.findOne({ email });
        if (!userExist)
            return undefined;
        return userExist;
    }
    async unloack(user, code) {
        const userExist = await User_1.UserSchema.findOne({ email: user.email });
        if (!userExist)
            return undefined;
        if (bcrypt_1.default.compareSync(code.code, userExist.passwordResetToken)) {
            const updateUser = await User_1.UserSchema.findByIdAndUpdate({ _id: userExist.id }, user);
            return updateUser;
        }
        return undefined;
    }
    async updatepassword(user, code) {
        const userExist = await User_1.UserSchema.findOne({ email: user.email });
        if (!userExist)
            return undefined;
        if (bcrypt_1.default.compareSync(code.code, userExist.passwordResetToken)) {
            const updateUser = await User_1.UserSchema.findByIdAndUpdate({ _id: userExist.id }, user);
            return updateUser;
        }
        return undefined;
    }
    async passwordToken(user) {
        const passwordToken = await User_1.UserSchema.findByIdAndUpdate({ _id: user.id }, user, { new: true });
        return passwordToken;
    }
}
exports.MongodbAuthRepository = MongodbAuthRepository;
