import { Router } from "express";
import paymentRouter from "./payment.route";
import userRouter from "./user.route";

const router = Router();

router.use('/user',userRouter);
router.use('/payment',paymentRouter);

export default router;