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
exports.PaymentDataBase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class PaymentDataBase extends BaseDatabase_1.BaseDatabase {
    insertPayment(payment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert(payment)
                    .into(PaymentDataBase.TABLE_NAME);
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
    purchaseInformationId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const purchaseInformation = yield this.getConnection()
                    .select(["wirecard_client.name as Nome do Cliente",
                    "wirecard_payment.amount as Valor", "wirecard_payment.name as Nome do Comprador",
                    "wirecard_payment.email as Email do Comprador", "wirecard_payment.type as Forma de Pagamento", "wirecard_payment.statusPayment as Status do Pagamento"])
                    .innerJoin("wirecard_client", "wirecard_payment.id_client", "wirecard_client.id")
                    .where({ "wirecard_payment.id": id })
                    .from(PaymentDataBase.TABLE_NAME);
                return purchaseInformation[0];
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
exports.PaymentDataBase = PaymentDataBase;
PaymentDataBase.TABLE_NAME = "wirecard_payment";
//# sourceMappingURL=PaymentDataBase.js.map