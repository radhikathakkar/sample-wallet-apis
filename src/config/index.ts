import dotenv from "dotenv";
dotenv.config();

const config = {
    PORT: process.env.PORT || 8000,
    DB: {
        MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/srides"
    },
    HTTP_STATUS_CODE: {
        SUCCESS: 200,
        NOT_FOUND: 404,
        SERVER_ERROR: 500,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
    }
}

export default config;