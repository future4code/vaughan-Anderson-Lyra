"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static clientModel(client) {
        return new Client(client.id, client.name);
    }
}
exports.Client = Client;
//# sourceMappingURL=Clients.js.map