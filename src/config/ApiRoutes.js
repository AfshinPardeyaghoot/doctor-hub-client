const BASE_URL = "http://localhost:9000";

//Authentication Apis
const SEND_OTP_SMS_URL = "/api/v1/auth/sendVerificationCode";
const CONFIRM_OTP_URL = "/api/v1/auth/login";
const REFRESH_ACCESS_TOKEN_URL = "/api/v1/auth/token/refresh/";

//User Apis
const USER_INFO_URL = "/api/v1/user/info";

//CategoryPage
const FETCH_CATEGORIES = "/api/v1/category";


const ApiRoutes = {
    BASE_URL,
    SEND_OTP_SMS_URL,
    CONFIRM_OTP_URL,
    REFRESH_ACCESS_TOKEN_URL,
    USER_INFO_URL,
    FETCH_CATEGORIES
}

export default ApiRoutes