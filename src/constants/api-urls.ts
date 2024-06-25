// "http://localhost:4000";
// export const BASE_URL_NODE = "https://node-js-invoice.onrender.com";
// https://ims-backend-9ghn.onrender.com/login
const JAVA_URL = "https://ims-backend-9ghn.onrender.com"; // ! java backend
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
    [ApiEndpoint.CHANGE_PASSWORD]: `/changePassword/`
};
