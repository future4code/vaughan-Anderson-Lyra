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
const BaseDatabase_1 = require("./BaseDatabase");
class Migrations extends BaseDatabase_1.BaseDatabase {
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection().raw(`
        create table wirecard_client(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255)
        );
        
        create table wirecard_payment(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            cpf VARCHAR(255),
            amount FLOAT,
            type VARCHAR(255),
            card_holder VARCHAR(255),
            card_number VARCHAR(255),
            card_expiration DATE,
            card_cvv VARCHAR(255),
            id_client VARCHAR(255),
            foreign key (id_client) references wirecard_client(id),
            statusPayment VARCHAR(45)
        );
        `);
            console.log("Table created successfully");
        });
    }
}
const createTableMigration = new Migrations();
createTableMigration.createTable();
//# sourceMappingURL=migrations.js.map