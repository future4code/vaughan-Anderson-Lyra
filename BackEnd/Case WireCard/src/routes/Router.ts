import express from "express";
import { ClientController } from "../controller/ClientController";


import { PaymentController } from "../controller/PaymentController";


export const clientRouter = express.Router()
export const paymentRouter = express.Router()

const clientController = new ClientController()
const paymentController = new PaymentController()

paymentRouter.get("/:id", (request, response) =>  paymentController.getPaymentId(request, response)) 
clientRouter.get("/:name", (request, response) => clientController.getClientName(request, response)) 
clientRouter.post("/create", (request, response) => clientController.createClient(request, response)) // Endpoint para cadastrar o cliente 
paymentRouter.post("/create", (request, response) =>  paymentController.createPayment (request, response)) // Endpoint para registrar compra ou cartão de crédito ou Boleto Bancário