import { NextFunction, Request, Response } from "express";
import UserService from "../services/user.service";
import config from "../config/index";
import { MESSAGE } from "../common/responseMessage";
import PaymentService from "../services/payment.service";
import { badRequest, success } from "../helpers/response";

export const makePaymentHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { upiId, amount, type} = req.body;
        const user = await UserService.getUserByUpi(upiId);
        if(!user){
            return badRequest(res, MESSAGE.USER.NOT_FOUND)
        }

        const newPayment = await PaymentService.createPayment({ userId: user._id, amount, type});
        return success(res, MESSAGE.PAYMENT.CREATED, newPayment)
    } catch (error) {
        return next(error);
    }
}

export const getAllTransactions = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.query.userId as string;
    if(!userId) {
        return badRequest(res, MESSAGE.USER.USER_ID_NOT_FOUND)
    }
    try {
       
        const user = await UserService.getUserById(userId);
        if(!user) {
            return badRequest(res, MESSAGE.USER.NOT_FOUND)
        } 

        const transactions = await PaymentService.getAllTransactionsByUser(userId);
        if(!transactions.length) {
            return badRequest(res, MESSAGE.PAYMENT.NOT_FOUND)
        }

        return success(res, MESSAGE.PAYMENT.FETCH_SUCCESS, transactions);

    } catch (error) {
        return next(error);
    }
};
