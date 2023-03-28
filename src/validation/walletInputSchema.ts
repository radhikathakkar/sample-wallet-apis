import Joi from "joi";

export const walletInputSchema = {
  getWalletData: Joi.object({
    userId: Joi.string().required(),
    userName: Joi.string().required(),
  }),
};