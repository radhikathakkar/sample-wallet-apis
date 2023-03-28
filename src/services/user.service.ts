import { UserInterface } from "../common/response.interface";
import User, { UserDocument } from "../models/user.model";

class UserServiceClass {
    async createUser(params: UserInterface): Promise<UserDocument> {
        const user: UserDocument = new User({ ...params });
        await user.save();
        return user;
      }
    async getUsers() : Promise<UserDocument[]>  {
        return await User.find();
    }

    async getUserByUsername(userName: string) : Promise<UserDocument | null>  {
        return await User.findOne({userName});
    }

    async updateUPIId(username: string, upiId: string): Promise<UserDocument | boolean> {
        const user = await User.findOne({ userName: username });
        if (user) {
          user.upiId = upiId;
          await user.save();
          return user;
        } else {
          return false;
        }
      }

      async getUserByUpi(upiId: string) : Promise<UserDocument | null>  {
        return await User.findOne({upiId});
    }

    async getUserById(id: string) : Promise<UserDocument | null>  {
      return await User.findOne({_id: id});
  }
}


const UserService = new UserServiceClass();

export default UserService;

