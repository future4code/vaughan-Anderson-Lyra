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
exports.PaymentBusiness = void 0;
const PaymentDataBase_1 = require("../data/PaymentDataBase");
const ErrorComplet_1 = require("../error/ErrorComplet");
const Payment_1 = require("../model/Payment");
const IdGenerator_1 = require("../services/IdGenerator");
class PaymentBusiness {
    insertPayment(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.name || !input.email || !input.cpf || !input.amount || !input.type || !input.id_client) {
                throw new ErrorComplet_1.ErrorComplet();
            }
            if (!input.email.includes("@") || !input.email.includes(".com")) {
                throw new Error("Email invalido, favor colocar @ e .com");
            }
            const paymentDataBase = new PaymentDataBase_1.PaymentDataBase();
            if (input.type === Payment_1.TYPE.CARTAO) {
                if (!input.card_holder || !input.card_number || !input.card_expiration || !input.card_cvv) {
                    throw new ErrorComplet_1.ErrorComplet();
                }
                const idGenerator = new IdGenerator_1.IdGenerator();
                const paymentCard = {
                    id: idGenerator.generate(),
                    name: input.name,
                    email: input.email,
                    cpf: input.cpf,
                    amount: input.amount,
                    type: input.type,
                    card_holder: input.card_holder,
                    card_number: input.card_number,
                    card_expiration: input.card_expiration,
                    card_cvv: input.card_cvv,
                    id_client: input.id_client,
                    statusPayment: Payment_1.STATUS.CONFIRMED
                };
                if (input.cpf.length !== 11) {
                    throw new Error("CPF invalido");
                }
                if (input.card_number.length != 16) {
                    throw new Error("Numero de Cartão invalido");
                }
                if (!input.card_expiration) {
                    throw new Error("Favor inserir neste formato ANO/MÊS/DIA");
                }
                if (input.card_cvv.length != 3) {
                    return "CVV deve conter 3 digitos, Verifique no verso do seu cartão";
                }
                yield paymentDataBase.insertPayment(paymentCard);
                const information = `Status da Compra: ${Payment_1.STATUS.CONFIRMED},  Comprovante do Pagamento:  ${paymentCard.id}`;
                return information;
            }
            if (input.type === Payment_1.TYPE.BOLETO) {
                const idGenerator = new IdGenerator_1.IdGenerator();
                const paymentBank = {
                    id: idGenerator.generate(),
                    name: input.name,
                    email: input.email,
                    cpf: input.cpf,
                    amount: input.amount,
                    type: input.type,
                    id_client: input.id_client,
                    statusPayment: Payment_1.STATUS.PENDING
                };
                yield paymentDataBase.insertPayment(paymentBank);
                function getRandomIntInclusive(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }
                let number = getRandomIntInclusive(0, 99999);
                let number2 = getRandomIntInclusive(0, 99999);
                let number3 = getRandomIntInclusive(0, 99999);
                let number4 = getRandomIntInclusive(0, 999999);
                let number5 = getRandomIntInclusive(0, 99999);
                let number6 = getRandomIntInclusive(0, 999999);
                let number7 = getRandomIntInclusive(0, 9);
                let number8 = getRandomIntInclusive(0, 99999999999999);
                const codigoDeBarras = (`${number} ${number2} ${number3} ${number4} ${number5} ${number6} ${number7} ${number8}`);
                return (`Status da Compra: ${Payment_1.STATUS.PENDING},  Codigo de Barras para Pagamento:  ${codigoDeBarras}`);
            }
        });
    }
    getPaymentIdBusiness(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const paymentDataBase = new PaymentDataBase_1.PaymentDataBase();
            const result = yield paymentDataBase.purchaseInformationId(id);
            return result;
        });
    }
}
exports.PaymentBusiness = PaymentBusiness;
//# sourceMappingURL=PaymentBusiness.js.map