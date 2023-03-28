import { Schema, model, Document } from 'mongoose';

export interface UserDocument extends Document {
    userId: string,
    userName: string,
    upiId: string,
  }


const UserSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    upiId: {
        type: String,
    },
}, {
    timestamps: true,
});


const User = model<UserDocument>('user', UserSchema);
export default User;