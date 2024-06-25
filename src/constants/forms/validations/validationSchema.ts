import * as Yup from 'yup';

export const loginValidationSchema = Yup.object({
    // email: Yup.string()
    //     .email('Must be a valid email')
    //     .max(255)
    //     .required('Email is required'),
    username: Yup.string()
        .required('Email is required'),
    password: Yup.string()
        .max(255)
        .required('Password is required'),
});

export const blogValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
});
export const userProfileValidationSchema = Yup.object().shape({
    username: Yup.string().required('Title is required'),
    email: Yup.string().required('Description is required'),
});