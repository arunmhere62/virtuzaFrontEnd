const LOCAL_URL = "http://localhost:4000";
const NODE_URL = "https://virtuzback.onrender.com";  // ! nodejs backend
export const BASE_LOCAL_URL = NODE_URL;

export enum ApiEndpoint {
    LOGIN = "login",

    // blogs
    BLOGS_GET_ID = "blogsGetById",
    BLOGS_CREATE = "blogsCreate",
    BLOGS_UPDATE = "blogsUpdate",
    BLOGS_DELETE = "blogsDelete",
    BLOGS_LIST = "blogsList",
    //Changepassword
    CHANGE_PASSWORD = "changePassword",
    //Dashboard

    // user Profile
    USER_PROFILE_GET_USERNAME = "userProfileGetByUsername",
    USER_PROFILE_CREATE = "userProfileCreate",
    USER_PROFILE_UPDATE = "userProfileUpdate",
    USER_PROFILE_DELETE = "userProfileDelete",
    USER_PROFILE_LIST = "userProfileList",
}

export type ApiUrls = {
    [key in ApiEndpoint]: string;
};

export const API_URLS: ApiUrls = {
    [ApiEndpoint.LOGIN]: `/login`,

    // Blogs
    [ApiEndpoint.BLOGS_CREATE]: `/blog/create`,
    [ApiEndpoint.BLOGS_DELETE]: `/blog/delete`,
    [ApiEndpoint.BLOGS_LIST]: `/blog/list`,
    [ApiEndpoint.BLOGS_GET_ID]: `/blog/get`,
    [ApiEndpoint.BLOGS_UPDATE]: `/blog/update`,
    //Changepassword
    [ApiEndpoint.CHANGE_PASSWORD]: `/changePassword/`,
    // USERname
    [ApiEndpoint.USER_PROFILE_CREATE]: `/userProfile/create`,
    [ApiEndpoint.USER_PROFILE_DELETE]: `/userProfile/delete`,
    [ApiEndpoint.USER_PROFILE_LIST]: `/userProfile/list`,
    [ApiEndpoint.USER_PROFILE_GET_USERNAME]: `/userProfile/get`,
    [ApiEndpoint.USER_PROFILE_UPDATE]: `/userProfile/update`,
};
