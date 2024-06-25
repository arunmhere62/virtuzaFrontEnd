import * as Yup from 'yup';

// -------- customer ------------------------
export interface LoginProps {
    // email: string;
    username: string;
    password: string;
};

export interface BlogProps {
    id?: string;
    title: string;
    description: string;
    publishedDate: string;
    author: string;
    content: string;
    imageUrl: string;
}
export interface BlogTypeProps {
    blogTypeValue?: BlogProps;
}

export interface FormProps {
    fields: FieldProps[];
    initialValues: any;
    validationSchema: any;
    showTable?: boolean;
    onSubmit: (values: any, actions: any) => void;
    setData?: any;
    updateFormValue?: (setFieldValue: Function) => void;
    headerName?: string;
    isSuccessToast?: boolean;
    error?: any;
    toastMessage?: string;
    buttons?: any;
};
export interface SubField {
    name: string;
    label: string;
    type: string;
    gridSize?: number;
    validation?: Yup.StringSchema<string>;
    options?: { value: string; label: string }[];
    startAdornment?: any;
    endAdornment?: any;
    helperText?: string;
};

export interface FieldProps {
    name: string;
    label?: string;
    type: string;
    titleGridSize?: number;
    subFields?: SubField[];
};

export interface ChangePasswordInitialValueProps {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    userName: string;
}


export interface UserProfileProps {
    id?: string;
    username: string;
    email: string;
    dob: string;
    password: string;
    address: string;
    city: string;
    state: string;
    job: string;
}
export interface UserProfileTypeProps {
    userProfileTypeValue?: UserProfileProps;
}
