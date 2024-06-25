import { API_URLS } from '../../constants/api-urls';
import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

export const blogApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBlog: builder.query<any[], void>({
            query: () => ({
                url: API_URLS.blogsList,
                method: 'POST',
            }),
            keepUnusedDataFor: 5 * 60 * 1000, // milliseconds
        }),

        addBlog: builder.mutation<any, Partial<any>>({
            query: (blog) => ({
                url: API_URLS.blogsCreate,
                method: 'POST',
                body: blog,
            }),
        }),

        updateBlog: builder.mutation<any, { id: string | undefined; blog: Partial<any> }>({
            query: ({ id, blog }) => ({
                url: `${API_URLS.blogsUpdate}/${id}`,
                method: 'POST',
                body: blog,
            }),
        }),

        getBlogById: builder.mutation<void, string | undefined>({
            query: (id) => ({
                url: `${API_URLS.blogsGetById}/${id}`,
                method: 'POST',
            }),
        }),

        deleteBlog: builder.mutation<void, string | undefined>({
            query: (id) => ({
                url: `${API_URLS.blogsDelete}/${id}`,
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useAddBlogMutation,
    useGetBlogByIdMutation,
    useGetBlogQuery,
    useUpdateBlogMutation,
    useDeleteBlogMutation,
} = blogApi;
