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
exports.ClientController = void 0;
const ClientBusiness_1 = require("../business/ClientBusiness");
class ClientController {
    createClient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const input = {
                    name
                };
                const clientBusiness = new ClientBusiness_1.ClientBusiness();
                const clientMessage = yield clientBusiness.insertClient(input);
                res.status(200).send({ clientMessage });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(400).json({ message: "Unexpected Error" });
                }
            }
        });
    }
    getClientName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                const clientBusiness = new ClientBusiness_1.ClientBusiness();
                const result = yield clientBusiness.getClientNameBusiness(name);
                res.status(200).send(result);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(400).send({ message: "Unexpected Error" });
                }
            }
        });
    }
}
exports.ClientController = ClientController;
//# sourceMappingURL=ClientController.js.map