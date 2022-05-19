import { PaymentDataBase } from "../data/PaymentDataBase"
import { ErrorComplet } from "../error/ErrorComplet"
import { PaymentInputDTO, PaymentInsert, TYPE } from "../model/Payment"
import { IdGenerator } from "../services/IdGenerator"


export class PaymentBusiness {

    async insertPayment(input: PaymentInsert) {

        if (!input.name || !input.email || !input.cpf || !input.amount || !input.type || !input.id_client) {
            throw new ErrorComplet()
        }

        if (!input.email.includes("@") || !input.email.includes(".com")) {
            throw new Error("Email invalido, favor colocar @ e .com")
        }

        const paymentDataBase = new PaymentDataBase()

        if (input.type === TYPE.CARTAO) {
            if (!input.card_holder || !input.card_number || !input.card_expiration || !input.card_cvv) {
                throw new ErrorComplet()
            }

            const idGenerator = new IdGenerator()

            const paymentCard: PaymentInputDTO = {
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
                id_client: input.id_client
            }

            if (input.cpf.length !== 11) {
                throw new Error("CPF invalido")
            }

            if (input.card_number.length != 16) {
                throw new Error("Numero de Cartão invalido")
            }

            if (!input.card_expiration) {
                throw new Error("Favor inserir neste formato ANO/MÊS/DIA")
            }

            if (input.card_cvv.length != 3) {
                return "CVV deve conter 3 digitos, Verifique no verso do seu cartão"
            }

            await paymentDataBase.insertPayment(paymentCard)
            const information = `Compra realizada com sucesso, segue o numero do comprovante , ${paymentCard.id}`

            return information
        }


        if (input.type === TYPE.BOLETO) {

            const idGenerator = new IdGenerator()
            const paymentBank: PaymentInputDTO = {
                id: idGenerator.generate(),
                name: input.name,
                email: input.email,
                cpf: input.cpf,
                amount: input.amount,
                type: input.type,
                id_client: input.id_client
            }

            await paymentDataBase.insertPayment(paymentBank)

            function getRandomIntInclusive(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            let number = getRandomIntInclusive(0, 99999)
            let number2 = getRandomIntInclusive(0, 99999)
            let number3 = getRandomIntInclusive(0, 99999)
            let number4 = getRandomIntInclusive(0, 999999)
            let number5 = getRandomIntInclusive(0, 99999)
            let number6 = getRandomIntInclusive(0, 999999)
            let number7 = getRandomIntInclusive(0, 9)
            let number8 = getRandomIntInclusive(0, 99999999999999)

            return (`${number} ${number2} ${number3} ${number4} ${number5} ${number6} ${number7} ${number8}`)


        }

    }

    async getPaymentIdBusiness(id: string) {

        const paymentDataBase = new PaymentDataBase()
        const result = await paymentDataBase.purchaseInformationId(id)

        return result
    }
}