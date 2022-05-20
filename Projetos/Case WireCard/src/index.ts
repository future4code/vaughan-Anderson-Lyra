import { app } from "./controller/app";
import { clientRouter, paymentRouter } from "./routes/Router";


app.use("/client", clientRouter)
app.use("/payment", paymentRouter)