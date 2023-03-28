import { Response } from "express"
import { CommonResponse } from "../common/response.interface";
import config from "../config";


export const success = (res: Response, message: string, data: any) => {
    let response: CommonResponse = {
        success: true,
        message,
        data
    };

    return res.status(config.HTTP_STATUS_CODE.SUCCESS).json(response);
}


export const badRequest = (res: Response, message: string) => {
    let response: CommonResponse = {
        success: true,
        message,
        data: null
    };

    return res.status(config.HTTP_STATUS_CODE.BAD_REQUEST).json(response);
}