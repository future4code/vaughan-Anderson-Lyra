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
exports.ClientBusiness = void 0;
const ClientDatabase_1 = require("../data/ClientDatabase");
const ErrorComplet_1 = require("../error/ErrorComplet");
const IdGenerator_1 = require("../services/IdGenerator");
class ClientBusiness {
    insertClient(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.name) {
                throw new ErrorComplet_1.ErrorComplet();
            }
            const idGenerator = new IdGenerator_1.IdGenerator();
            const client = Object.assign({ id: idGenerator.generate() }, input);
            const clientDataBase = new ClientDatabase_1.ClientDataBase();
            const clientName = yield clientDataBase.clientFindByName(input.name);
            if (clientName) {
                throw new Error("Cliente já está cadastrado");
            }
            const newClient = yield clientDataBase.insertClient(client);
            return newClient;
        });
    }
    getClientNameBusiness(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientDataBase = new ClientDatabase_1.ClientDataBase();
            const result = yield clientDataBase.clientInfoName(name);
            return result;
        });
    }
}
exports.ClientBusiness = ClientBusiness;
//# sourceMappingURL=ClientBusiness.js.map