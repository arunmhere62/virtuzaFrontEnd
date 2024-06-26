import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { userProfileFields } from '../../constants/form-data/form-data-json';
import { userProfileInitialValue } from '../../constants/forms/formikInitialValues';
import { clearData } from '../../redux-store/global/globalState';
import { BlogProps, BlogTypeProps, UserProfileTypeProps } from '../../types/types';
import { useAddBlogMutation, useGetBlogQuery, useUpdateBlogMutation } from '../../redux-store/blog/blogApi';
import { AppDispatch } from '../../redux-store/store';
import { blogValidationSchema, userProfileValidationSchema } from '../../constants/forms/validations/validationSchema';
import { DynamicFormCreate } from '../../components/Form-renderer/Dynamic-form';
import { useAddUserProfileMutation, useGetUserProfileByUsernameMutation, useGetUserProfileQuery, useUpdateUserProfileMutation } from '../../redux-store/userProfile/userProfileApi';

// create and edit screen

const UserProfileForm = ({ userProfileTypeValue }: UserProfileTypeProps) => {

    const [addUserProfile, { isLoading: isAdding, isSuccess: isAddSuccess, isError: isAddError }] = useAddUserProfileMutation();
    const [updateUserProfile, { isLoading: isUpdating, isSuccess: isUpdateSuccess, isError: isUpdateError }] = useUpdateUserProfileMutation();

    const navigate = useNavigate();

    console.log("value", userProfileTypeValue);

    const [getUserProfileByUsername, { data: userProfile, isLoading, isError, }] = useGetUserProfileByUsernameMutation();

    const dispatch = useDispatch<AppDispatch>();

    const initialValues = userProfileTypeValue || userProfileInitialValue;

    const onSubmit = useMemo(() => async (values: BlogProps, actions: any) => {
        try {
            if (userProfileTypeValue) {
                console.log(values);
                await updateUserProfile({ id: userProfileTypeValue.id, userProfile: values });
                dispatch(clearData());
            } else {
                await addUserProfile(values);
            }
            actions.resetForm();
        } catch (error) {
            console.error("An error occurred during form submission:", error);
        } finally {
            actions.setSubmitting(false);
        }
    }, [addUserProfile, updateUserProfile, userProfileTypeValue]);

    useEffect(() => {
        if (isAddSuccess || isUpdateSuccess) {
            const username = localStorage.getItem('username');
            getUserProfileByUsername({ userProfile: { username } });
            console.log("Operation successful!");
        }
    }, [isAddSuccess, isUpdateSuccess]);

    return (
        <div>
            <DynamicFormCreate
                toastMessage={userProfileTypeValue ? 'Successfully Updated User Profile' : 'Successfully Created User Profile'}
                isSuccessToast={isAddSuccess || isUpdateSuccess}
                headerName={userProfileTypeValue ? 'Edit User Profile' : 'Create User Profile'}
                showTable={true}
                fields={userProfileFields}
                initialValues={initialValues}
                validationSchema={userProfileValidationSchema}
                onSubmit={onSubmit}
            // buttons={[
            //     { label: 'Save', icon: Add, onClick: onSubmit }
            // ]}
            />
        </div>
    );
};

const UserProfileCreateScreen: React.FC = () => {
    const gstValue = useSelector((state: any) => state.globalState.data);
    const [key, setKey] = useState<number>(0);

    useEffect(() => {
        setKey((prevKey: number) => prevKey + 1);
    }, [gstValue]);

    return (
        <>
            <UserProfileForm key={key} userProfileTypeValue={gstValue} />
        </>
    );
};

export default UserProfileCreateScreen;
