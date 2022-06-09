"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./controller/app");
const Router_1 = require("./routes/Router");
app_1.app.use("/client", Router_1.clientRouter);
app_1.app.use("/payment", Router_1.paymentRouter);
//# sourceMappingURL=index.js.map