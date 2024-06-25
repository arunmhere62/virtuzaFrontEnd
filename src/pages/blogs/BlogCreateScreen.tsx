import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { blogsField } from '../../constants/form-data/form-data-json';
import { blogInitialValue } from '../../constants/forms/formikInitialValues';
import { clearData } from '../../redux-store/global/globalState';
import { BlogProps, BlogTypeProps } from '../../types/types';
import { useAddBlogMutation, useGetBlogQuery, useUpdateBlogMutation } from '../../redux-store/blog/blogApi';
import { AppDispatch } from '../../redux-store/store';
import { blogValidationSchema } from '../../constants/forms/validations/validationSchema';
import { DynamicFormCreate } from '../../components/Form-renderer/Dynamic-form';

// create and edit screen

const BlogForm = ({ blogTypeValue }: BlogTypeProps) => {

    const [addGstType, { isLoading: isAdding, isSuccess: isAddSuccess, isError: isAddError }] = useAddBlogMutation();
    const [updateGstType, { isLoading: isUpdating, isSuccess: isUpdateSuccess, isError: isUpdateError }] = useUpdateBlogMutation();

    const navigate = useNavigate();

    const { data: getGstType, refetch } = useGetBlogQuery();

    const dispatch = useDispatch<AppDispatch>();

    const initialValues = blogTypeValue || blogInitialValue;

    const onSubmit = useMemo(() => async (values: BlogProps, actions: any) => {
        try {
            if (blogTypeValue) {
                console.log(values);
                await updateGstType({ id: blogTypeValue.id, blog: values });
                dispatch(clearData());
            } else {
                await addGstType(values);
            }
            actions.resetForm();
        } catch (error) {
            console.error("An error occurred during form submission:", error);
        } finally {
            actions.setSubmitting(false);
        }
    }, [addGstType, updateGstType, blogTypeValue]);

    useEffect(() => {
        if (isAddSuccess || isUpdateSuccess) {
            refetch();
            console.log("Operation successful!");
        }
    }, [isAddSuccess, isUpdateSuccess]);

    return (
        <div>
            <DynamicFormCreate
                toastMessage={blogTypeValue ? 'Successfully Updated Blog' : 'Successfully Created Blog'}
                isSuccessToast={isAddSuccess || isUpdateSuccess}
                headerName={blogTypeValue ? 'Edit Blog' : 'Create Blog'}
                showTable={true}
                fields={blogsField}
                initialValues={initialValues}
                validationSchema={blogValidationSchema}
                onSubmit={onSubmit}
            // buttons={[
            //     { label: 'Save', icon: Add, onClick: onSubmit }
            // ]}
            />
        </div>
    );
};

const BlogScreen: React.FC = () => {
    const gstValue = useSelector((state: any) => state.globalState.data);
    const [key, setKey] = useState<number>(0);

    useEffect(() => {
        // Whenever gstValue changes, update the key to force re-render
        setKey((prevKey: number) => prevKey + 1);
    }, [gstValue]);

    return (
        <>
            <BlogForm key={key} blogTypeValue={gstValue} />
        </>
    );
};

export default BlogScreen;
