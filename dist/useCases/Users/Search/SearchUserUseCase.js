"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchUserUseCase = void 0;
class SearchUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(descripty) {
        const userSearched = await this.userRepository.search(descripty);
        return userSearched;
    }
}
exports.SearchUserUseCase = SearchUserUseCase;
