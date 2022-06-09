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
exports.ClientDataBase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class ClientDataBase extends BaseDatabase_1.BaseDatabase {
    insertClient(client) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert(client)
                    .into(ClientDataBase.TABLE_NAME);
                return "Criado com Sucesso";
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unexpected database error");
                }
            }
        });
    }
    clientFindByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield this.getConnection()
                    .select("*")
                    .where({ name: name })
                    .from(ClientDataBase.TABLE_NAME);
                return client[0];
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unexpected database error");
                }
            }
        });
    }
    clientInfoName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientInfo = yield this.getConnection()
                    .select(["wirecard_client.id as Id", "wirecard_client.name as Nome do Cliente"])
                    .where({ "wirecard_client.name": name })
                    .from(ClientDataBase.TABLE_NAME);
                return clientInfo[0];
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unexpected database error");
                }
            }
        });
    }
}
exports.ClientDataBase = ClientDataBase;
ClientDataBase.TABLE_NAME = "wirecard_client";
//# sourceMappingURL=ClientDatabase.js.map