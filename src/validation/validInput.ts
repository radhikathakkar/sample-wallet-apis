import { RequestHandler } from "express";
import validator from "../utils/validator";
import { paymentInputSchema } from "./paymentInputSchema";
import { walletInputSchema } from "./walletInputSchema";

export const walletInputValidation: RequestHandler = (req, res, next) =>
  validator(walletInputSchema.getWalletData, req.body, next);

export const paymentInputValidation: RequestHandler = (req, res, next) =>
  validator(paymentInputSchema.getPaymentData, req.body, next);