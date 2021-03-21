"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUserUseCase = void 0;
class ShowUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        const usersAll = await this.userRepository.showAll();
        return usersAll;
    }
}
exports.ShowUserUseCase = ShowUserUseCase;
