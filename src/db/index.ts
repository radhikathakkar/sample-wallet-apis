import mongoose from "mongoose";
import config from "../config/index";
const uri = config.DB.MONGO_URI as string;
const connect = async () => {
    try {
        const data = await mongoose.connect(uri);
        console.log("successfully connected with DB!");
    } catch (err) {
        console.log('something wrong with database connection');
        process.exit(1);
    }
};

export default connect;