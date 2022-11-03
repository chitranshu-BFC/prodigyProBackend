const CONFIG = {};
CONFIG.DOMAIN_NAME = "";
CONFIG.API_URL = "";
CONFIG.SCHEMAS = {
  TEACHERS: "Teachers",
  TEACHERSALIAS: "teachers",
  PARENTS: "Parents",
  STUDENTS: "Students",
  PRINCIPAL: "Principal",
  ORGANIZATION: "organizationDB",
  USER: 'User',
  EXAM: 'Exam',
  EVENTS: 'Events',
  ISSUE: 'Issue',
  ATTENDANCE: 'Attendance',
  SUBJECTS: 'Subjects',
  SCHEDULE: 'Schedule',
  FEE_STRUCTURE: 'feeStructure',
  LEAVE: 'Leave'
};


CONFIG.ROUTES = {
  AUTH: "/auth",
  USER: "/user",
  BASE_ROUTE: "/api",
  LOGIN_WITH_EMAIL: "/login-with-email",
  REGISTER_WITH_EMAIL: "/register-with-email",
  SIPROUTE: "/sip",
  ELSSROUTE: "/elss",
  EMIROUTE: "/emi",
  SNAPSHOT: "/snapshot",
  PORTFOLIO_API_DATA: "/portfolio_api_data",
  USER_PROFILE: "/User_profile",
  PORTFOLIO: "/portfolio",
  USER_PROFILE_MEMBERLIST: "/userProfileMemberList",
  GET_IIN_STATUS: "/getIINStatus",
  GET_IIN_DETAILS_WMS: "/GETIINDETAILSWMS",
  GET_BASKET_LIST: "/getBasketList",
  PAN_VERIFY: "/pen_verify",
  GET_OCCUPATIONS: "/getoccupations",
  GET_IIN: "/GETIIN",
  GET_INCOME: "/getIncome",
  ACCOUNT_TYPE: "/accountType",
  PRODUCT_VIA_ISIN: "/ProductViaISIN",
  BANK_LIST: "/bank_list",
  GET_COUNTRY: "/get_Country",
  GET_RELATIONSHIP_MASTER: "/getRelationshipMaster",
  STATE_BY_PINCODE: "/StateCitybyPincode",
  ADDITIONAL_IIN_PERSONAL_DETAILS: "/additional_iin_personalDetails",
  ADDITIONAL_IIN_ADDRESS_DETAILS: "/additional_iin_address_details",
  ADDITIONAL_IIN_DECLARATION_JOURNEY_PC: "/additional_iin_declaration_journy_pc",
  ADDITIONAL_IIN_GET_NOMINEE: "/additional_iin_get_nomine",
  ADDITIONAL_IIN_CREATE: "/additional_iinCreate",
  INSERT_TRANSACTION_DETAILS: "/insertTransactionDetails",
  MULTI_PURCHASE_SIP: "/multi_purchase_sip",
  DELETE_TRANSACTION_DETAILS: "/deleteTransactionDetails",
  SAVE_TRANSACTION_DETAILS: "/saveTransactionDetails",
  AMC_LIST: "/amclist",
  PURCHASE: "/purchase",
  MANDATE_LIST: "/mandateList",
  GET_BANK_LIST: "/getbankList",
  ADD_PRINCIPAL: "/add-principal",
  FIND_PRINCIPAL: "/find-principal",
  TEACHER: "/teacher",
  STUDENT: "/student",
  PARENT: "/parent",
  REGISTER_STUDENT: "/register-student",
  FIND_STUDENTS: "/find-student",
  ADD_TEACHER: "/add-teacher",
  FIND_TEACHER: "/find-teacher",
  SCHEDULE_EXAM: "/schedule-exam",
  GET_EXAMS: "/get-exams",
  REGISTER_PARENT: "/register-parent",
  ALL_EXAMS: "/all-exams",
  SCHOOL: "/school",
  ADD_SCHOOL: "/add-school",
  GET_SCHOOLS: "/get-schools",
  GET_EVENTS: "/get-events",
  ADD_EVENTS: "/add-events",
  GET_CHILDS: "/get-child",
  RAISE_ISSUES: "/raise-issue",
  GET_ISSUES: "/get-issues",
  USER_LOGIN: "/login",
  USER_REGISTER: "/user-register",
  USER: "/user",
  FILES: "/files",
  UPLOAD_FILES: "/upload-files",
  LOGIN: "/login",
  RESET_PASSWORD: "/reset-password",
  FORGOT_PASSWORD: "/forgot-password",
  MARK_ATTENDANCE: "/mark-attendance",
  GET_ATTENDANCE: "/get-attendance",
  STUDENT_ATTENDANCE: "/student-attendance",
  ADD_SUBJECTS: "/add-subjects",
  GET_SUBJECTS: "/get-subjects",
  ADD_SCHEDULE: "/add-schedule",
  GET_SCHEDULE: "/get-schedule",
  GET_DASHBOARD: "/get-dashboard",
  ADD_FEE: "/add-fee",
  GET_FEE: "/get-fee",
  GET_SUBJECTS: "/get-Subjects",
  REQUEST_LEAVE: "/request-leave",
  GET_ALL_TEACHERS: "/get-all-teachers"
};


CONFIG.ERROR_CODES = {
  NO_FILES_TO_UPLOAD: 400, // Bad Request
  INTERNAL_SERVER_ERROR: 500,
  FILE_NOT_FOUND: 404,
};
CONFIG.RESPONSE_STATUS = {
  SUCCESS: "S",
  FAIL: "F",
  ERROR: "E",
};

CONFIG.SUCCESS_RESPONSE = 200;

module.exports = CONFIG;