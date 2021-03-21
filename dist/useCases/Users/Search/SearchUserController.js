"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchUserController = void 0;
class SearchUserController {
    constructor(searchUseUseCase) {
        this.searchUseUseCase = searchUseUseCase;
    }
    async handler(req, res) {
        const { descript } = req.params;
        try {
            const userSearched = await this.searchUseUseCase.execute(descript);
            return res.status(200).send(userSearched);
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao pesquisar Usuário: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.SearchUserController = SearchUserController;
