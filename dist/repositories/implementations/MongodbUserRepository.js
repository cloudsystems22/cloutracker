"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbUserRepository = void 0;
const User_1 = require("../../entities/User");
class MongodbUserRepository {
    async save(user) {
        const updateUser = await User_1.UserSchema.findByIdAndUpdate({ _id: user.id }, user, { new: true });
        return updateUser;
    }
    async create(user) {
        const newUser = await User_1.UserSchema.create(user);
        return newUser;
    }
    async findByEmail(email) {
        const userExist = await User_1.UserSchema.findOne({ email });
        return userExist;
    }
    async findById(id) {
        const userExist = await User_1.UserSchema.findById({ _id: id });
        return userExist;
    }
    async showAll() {
        const usersAll = await User_1.UserSchema.find({});
        return usersAll;
    }
    async search(descript) {
        const userRegex = new RegExp(descript, 'i');
        const userSearch = await User_1.UserSchema.find({
            $or: [
                { userName: userRegex },
                { email: userRegex }
            ]
        });
        return userSearch;
    }
}
exports.MongodbUserRepository = MongodbUserRepository;
