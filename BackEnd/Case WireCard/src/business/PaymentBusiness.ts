import { PaymentDataBase } from "../data/PaymentDataBase"
import { ErrorComplet } from "../error/ErrorComplet"
import { PaymentInputDTO, PaymentInsert, TYPE } from "../model/Payment"
import { IdGenerator } from "../services/IdGenerator"


export class PaymentBusiness {
    
    async insertPayment(input: PaymentInsert) {
        
        if(!input.name || !input.email || !input.cpf || !input.amount || !input.type || !input.id_client) {
            throw new ErrorComplet()
        }

        if(!input.email.includes("@") || !input.email.includes(".com")) {
            throw new Error("Email invalido, favor colocar @ e .com")
        }

        const paymentDataBase = new PaymentDataBase()

        if(input.type === TYPE.CARTAO) {
          if(!input.card_holder || !input.card_number || !input.card_expiration || !input.card_cvv) {
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

            if(input.card_number.length > 16) {
                throw new Error("Numero invalido")
            }

            await paymentDataBase.insertPayment(paymentCard)
            const information = `Compra realizada com sucesso, segue o id da compra para mais informações, ${paymentCard.id}`

           return information
        }


        if(input.type === TYPE.BOLETO) {

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
            return

        
        }

    }

    async getPaymentIdBusiness(id: string) {

        const paymentDataBase = new PaymentDataBase()
        const result = await paymentDataBase.purchaseInformationId(id)

        return result 
    }
}