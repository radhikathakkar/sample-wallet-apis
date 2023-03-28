import { Schema, model, Document } from 'mongoose';

export interface PaymentDocument extends Document {
    type: string;
    amount: number;
    userId: string;
  }

const PaymentSchema = new Schema({
    amount: {
        type: Number
    },
    type: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, {
    timestamps: true
});


const Payment = model<PaymentDocument>('payment', PaymentSchema);
export default Payment;