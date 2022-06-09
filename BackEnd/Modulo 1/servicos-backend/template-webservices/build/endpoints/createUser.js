"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../data/connection");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, nickname, email, address } = req.body;
            if (!name || !nickname || !email || !address) {
                res.statusCode = 422;
                throw "'name', 'nickname', 'email' e 'address' são obrigatórios";
            }
            const id = Date.now().toString();
            const newUser = { id, name, nickname, email, address };
            yield (0, connection_1.connection)('aula51_users').insert(newUser);
            res.status(201).send("Usuário criado!");
        }
        catch (error) {
            if (typeof error === "string") {
                res.send(error);
            }
            else {
                console.log(error.sqlMessage || error.message);
                res.status(500).send("Ops! Um erro inesperado ocorreu =/");
            }
        }
    });
}
exports.default = createUser;
