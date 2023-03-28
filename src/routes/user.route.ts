import { Router } from "express";
import { createUserHandler, generateWalletId } from "../controllers/user.controller";
import { walletInputValidation } from "../validation/validInput";
const userRouter = Router();

userRouter.post('/create-user',  walletInputValidation, createUserHandler)
userRouter.post('/create-wallet-id',  walletInputValidation, generateWalletId)


export default userRouter;