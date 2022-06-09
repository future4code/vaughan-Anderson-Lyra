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
exports.PaymentController = void 0;
const PaymentBusiness_1 = require("../business/PaymentBusiness");
class PaymentController {
    createPayment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, cpf, amount, type, card_holder, card_number, card_expiration, card_cvv, id_client, statusPayment } = req.body;
                const input = {
                    name,
                    email,
                    cpf,
                    amount,
                    type,
                    card_holder,
                    card_number,
                    card_expiration,
                    card_cvv,
                    id_client,
                    statusPayment
                };
                const paymentBusiness = new PaymentBusiness_1.PaymentBusiness();
                const paymentMessage = yield paymentBusiness.insertPayment(input);
                res.status(200).send({ paymentMessage });
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
    getPaymentId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const paymentBusiness = new PaymentBusiness_1.PaymentBusiness();
                const result = yield paymentBusiness.getPaymentIdBusiness(id);
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
exports.PaymentController = PaymentController;
//# sourceMappingURL=PaymentController.js.map