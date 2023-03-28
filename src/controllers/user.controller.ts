import { NextFunction, Request, Response } from "express";
import UserService from "../services/user.service";
import { MESSAGE } from "../common/responseMessage";
import { badRequest, success } from "../helpers/response";

export const createUserHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userName, userId} = req.body;
        const user = await UserService.getUserByUsername(userName);
        if(user){
            return badRequest(res, MESSAGE.USER.ALREDY_EXISTS);
        }

        const newUser= await UserService.createUser({ userName, userId});
        return success(res, MESSAGE.USER.CREATED, newUser);
    } catch (error) {
        return next(error);
    }
}

export const generateWalletId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {userName} = req.body;
        const upiId = `${userName}@upi`;
        const updatedUser = await UserService.updateUPIId(userName, upiId);
        if(!updatedUser) {
            return badRequest(res, MESSAGE.USER.NOT_FOUND)
        } 
        return success(res, MESSAGE.USER.UPI_ID_CREATED, updatedUser)

    } catch (error) {
        return next(error);
    }
};
