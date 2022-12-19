const BASE_URL = "http://localhost:9000";

//Authentication Apis
const SEND_OTP_SMS_URL = "/api/v1/auth/sendVerificationCode";
const CONFIRM_OTP_URL = "/api/v1/auth/login";
const REFRESH_ACCESS_TOKEN_URL = "/api/v1/auth/token/refresh/";

//User Apis
const USER_INFO_URL = "/api/v1/user/info";

//CategoryPage
const FETCH_CATEGORIES = "/api/v1/category";

//doctor apis
const FETCH_DOCTORS = "/api/v1/doctor"

//category doctors
const FETCH_CATEGORIES_DOCTORS = '/api/v1/category'

 //schedules
const FETCH_DOCTOR_SCHEDULES = '/api/v1/schedule/doctor'

//consultations
const RESERVE_CONSULTATION = '/api/v1/consultation'

const ApiRoutes = {
    BASE_URL,
    SEND_OTP_SMS_URL,
    CONFIRM_OTP_URL,
    REFRESH_ACCESS_TOKEN_URL,
    USER_INFO_URL,
    FETCH_CATEGORIES,
    FETCH_CATEGORIES_DOCTORS,
    FETCH_DOCTORS,
    FETCH_DOCTOR_SCHEDULES,
    RESERVE_CONSULTATION
}

export default ApiRoutes