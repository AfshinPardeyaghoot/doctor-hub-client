const BASE_URL = "http://localhost:9000";

//Authentication Apis
const SEND_OTP_SMS_URL = "/api/v1/auth/sendVerificationCode";
const CONFIRM_OTP_URL = "/api/v1/auth/login";
const REFRESH_ACCESS_TOKEN_URL = "/api/v1/auth/token/refresh/";

//User Apis
const USER_INFO_URL = "/api/v1/user/info";
const FETCH_USER_FULL_INFO = "/api/v1/user";
const UPDATE_USER_INFO = "/api/v1/user/info";

//CategoryPage
const FETCH_CATEGORIES = "/api/v1/category";

//doctor apis
const FETCH_DOCTORS = "/api/v1/doctor";

//category doctors
const FETCH_CATEGORIES_DOCTORS = '/api/v1/category'

//schedules
const FETCH_DOCTOR_SCHEDULES = '/api/v1/schedule/doctor'

//consultations
const RESERVE_CONSULTATION = '/api/v1/consultation'
const FETCH_CONSULTATION = '/api/v1/consultation'
const FETCH_USER_CONSULTATIONS = '/api/v1/consultation/user'
//chat

const FETCH_CHAT_MESSAGES = '/api/v1/chat'
const SEND_END_CHAT = '/api/v1/chat'
const SEND_FILE_MESSAGE = '/api/v1/chat/message/file'

const FETCH_ALL_USERS = '/api/v1/user/admin'
const FETCH_USER_BY_ID = '/api/v1/user'
const UPDATE_USER_BY_ID = '/api/v1/user'

const FETCH_ALL_ROLES = '/api/v1/auth/role'

const FETCH_ALL_SPECIALITIES = '/api/v1/speciality'

const ApiRoutes = {
    FETCH_ALL_SPECIALITIES,
    FETCH_ALL_ROLES,
    UPDATE_USER_BY_ID,
    FETCH_USER_BY_ID,
    SEND_END_CHAT,
    BASE_URL,
    SEND_OTP_SMS_URL,
    CONFIRM_OTP_URL,
    REFRESH_ACCESS_TOKEN_URL,
    USER_INFO_URL,
    FETCH_CATEGORIES,
    FETCH_CATEGORIES_DOCTORS,
    FETCH_DOCTORS,
    FETCH_DOCTOR_SCHEDULES,
    RESERVE_CONSULTATION,
    FETCH_USER_CONSULTATIONS,
    FETCH_CONSULTATION,
    FETCH_CHAT_MESSAGES,
    SEND_FILE_MESSAGE,
    FETCH_USER_FULL_INFO,
    UPDATE_USER_INFO,
    FETCH_ALL_USERS
}

export default ApiRoutes