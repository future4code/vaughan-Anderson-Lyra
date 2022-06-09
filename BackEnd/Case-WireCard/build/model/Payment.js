"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS = exports.TYPE = exports.Payment = void 0;
class Payment {
    constructor(id, name, email, cpf, amount, type, card_holder, card_number, card_expiration, card_cvv, id_client, id_buyer, statusPayment) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.amount = amount;
        this.type = type;
        this.card_holder = card_holder;
        this.card_number = card_number;
        this.card_expiration = card_expiration;
        this.card_cvv = card_cvv;
        this.id_client = id_client;
        this.id_buyer = id_buyer;
        this.statusPayment = statusPayment;
    }
    static paymenttModel(payment) {
        return new Payment(payment.id, payment.name, payment.email, payment.cpf, payment.amount, payment.type, payment.card_holder, payment.card_number, payment.card_expiration, payment.card_cvv, payment.id_client, payment.id_buyer, payment.statusPayment);
    }
}
exports.Payment = Payment;
var TYPE;
(function (TYPE) {
    TYPE["CARTAO"] = "Cart\u00E3o de Cr\u00E9dito";
    TYPE["BOLETO"] = "Boleto Banc\u00E1rio";
})(TYPE = exports.TYPE || (exports.TYPE = {}));
var STATUS;
(function (STATUS) {
    STATUS["PENDING"] = "PENDENTE";
    STATUS["CONFIRMED"] = "CONFIRMADO";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
//# sourceMappingURL=Payment.js.map