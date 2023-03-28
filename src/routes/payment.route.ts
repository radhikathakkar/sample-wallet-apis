import { Router } from "express";
import { getAllTransactions, makePaymentHandler } from "../controllers/payment.controller";
import { paymentInputValidation } from "../validation/validInput";
const paymentRouter = Router();

paymentRouter.post('/make-payment',  paymentInputValidation, makePaymentHandler)
paymentRouter.get('/get-all-transactions',  getAllTransactions)


export default paymentRouter;