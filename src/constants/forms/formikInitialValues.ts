import { LoginProps, ChangePasswordInitialValueProps, BlogProps, UserProfileProps } from "../../types/types";

export const loginInitialValue: LoginProps = {
    // email: "",
    username: "",
    password: "",
}

export const ChangePasswordInitialValue: ChangePasswordInitialValueProps = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    userName: "",
}

export const blogInitialValue: BlogProps = {
    title: '',
    description: "",
    publishedDate: "",
    author: "",
    content: "",
    imageUrl: ""
};


export const userProfileInitialValue: UserProfileProps = {
    username: "",
    email: "",
    dob: "",
    password: "",
    address: "",
    city: "",
    state: "",
    job: "",
};
