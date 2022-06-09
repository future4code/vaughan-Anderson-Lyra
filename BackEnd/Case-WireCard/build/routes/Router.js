"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRouter = exports.clientRouter = void 0;
const express_1 = __importDefault(require("express"));
const ClientController_1 = require("../controller/ClientController");
const PaymentController_1 = require("../controller/PaymentController");
exports.clientRouter = express_1.default.Router();
exports.paymentRouter = express_1.default.Router();
const clientController = new ClientController_1.ClientController();
const paymentController = new PaymentController_1.PaymentController();
exports.paymentRouter.get("/:id", (request, response) => paymentController.getPaymentId(request, response));
exports.clientRouter.get("/:name", (request, response) => clientController.getClientName(request, response));
exports.clientRouter.post("/create", (request, response) => clientController.createClient(request, response));
exports.paymentRouter.post("/create", (request, response) => paymentController.createPayment(request, response));
//# sourceMappingURL=Router.js.map