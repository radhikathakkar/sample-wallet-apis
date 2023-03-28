import Joi from "joi";

export const paymentInputSchema = {
  getPaymentData: Joi.object({
    upiId: Joi.string().required(),
    type: Joi.string().required(),
    amount: Joi.number().required(),
  }),
};