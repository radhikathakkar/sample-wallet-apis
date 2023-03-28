import { Response } from "express";

export interface CommonResponse{
    success: boolean;
    message: string;
    data: any | null;
}

export interface UserInterface {
    userId: string;
    userName: string;
    upiId?: string;
}


export interface PaymentInterface {
    type: string;
    amount: number;
    userId: string;
}