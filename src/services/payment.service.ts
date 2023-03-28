import { PaymentInterface, UserInterface } from "../common/response.interface";
import Payment, { PaymentDocument } from "../models/payment.model";

class PaymentServiceClass {
    async createPayment(params: PaymentInterface): Promise<PaymentDocument> {
        const payment: PaymentDocument = new Payment({ ...params });
        await payment.save();
        return payment;
      }
    async getAllTransactionsByUser(userId: string) : Promise<PaymentDocument[]>  {
        return await Payment.find({userId});
    }
}


const PaymentService = new PaymentServiceClass();

export default PaymentService;

