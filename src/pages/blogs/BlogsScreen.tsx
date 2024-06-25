import React, { useState } from 'react';
import CardUi from '../../components/ui/Card';
import { useDeleteBlogMutation, useGetBlogByIdMutation, useGetBlogQuery } from '../../redux-store/blog/blogApi';
import { Grid } from '@mui/material';
import TableHeader from '../../components/layouts/TableHeader';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux-store/store';
import { clearData, setData } from '../../redux-store/global/globalState';
import DialogBoxUi from '../../components/ui/DialogBox';
import BlogDetailsScreen from './BlogDetailsScreen';

const BlogsScreen = () => {
    const { data: blogList, error, isLoading, refetch } = useGetBlogQuery();
    const [getBlogById, { }] = useGetBlogByIdMutation();
    const [deleteBlogPost, { }] = useDeleteBlogMutation();
    const [opendialogBox, setIsOpenDialogBox] = useState(false);

    console.log("blogList", blogList);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const handleDeleteClick = (id: any) => {
        console.log("data", id);
        const confirmed = window.confirm("Are you sure you want to delete this blog?");
        if (confirmed) {
            deleteBlogPost(id)
        }
        refetch();
    };

    const handleEditClick = async (id: any) => {

        try {
            const res = await getBlogById(id)
            dispatch(setData(res.data));
            navigate("/blog/create");
        } catch (error) {
            console.log("error when fetching data", error);

        }
        console.log("edit", id);
    };

    const handleViewClick = async (id: any) => {
        try {
            const res = await getBlogById(id)
            dispatch(setData(res.data));
            setIsOpenDialogBox(true);
        } catch (error) {
            console.log("error when fetching data", error);

        }
        console.log("view", id);
        // Add view logic here
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading blogs.</div>;

    const buttons = [
        {
            label: 'Create Blog Post', icon: Add, onClick: () => {
                dispatch(clearData());
                navigate("/blog/create")
            }
        },
    ];
    function removeBaseUrl(imageUrl: string) {
        const baseUrl = 'http://localhost:4000/public/Images/';
        if (imageUrl.startsWith(baseUrl)) {
            return imageUrl.substring(baseUrl.length);
        }
        return imageUrl;
    }
    return (
        <>
            <DialogBoxUi
                open={opendialogBox} // Set open to true to display the dialog initially
                // title="Custom Dialog Title"
                content={
                    <>
                        <BlogDetailsScreen />
                    </>
                }
                // actions={
                //     <Button autoFocus onClick={handleClose}>
                //         Save changes
                //     </Button>
                // }
                handleClose={() => {
                    setIsOpenDialogBox(false);
                }}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <TableHeader
                        headerName="Create Blog Post"
                        buttons={buttons}
                    />
                </Grid>

                {blogList?.map((blog: any) => (
                    <Grid item xs={12} sm={6} md={4} key={blog.id}>
                        <CardUi
                            id={blog.id}
                            imageUrl={blog.imageUrl}
                            description={blog.description}
                            title={blog.title}
                            handleDelete={() => handleDeleteClick(blog.id)}
                            handleEdit={() => handleEditClick(blog.id)}
                            handleView={() => handleViewClick(blog.id)}
                        />
                    </Grid>
                ))}

            </Grid>
        </>
    );
}

export default BlogsScreen;
