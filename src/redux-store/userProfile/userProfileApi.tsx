import { API_URLS } from '../../constants/api-urls';
import { apiSlice } from '../api/apiSlice';

export const userProfileApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfile: builder.query<any[], void>({
            query: () => ({
                url: API_URLS.userProfileList,
                method: 'POST',
            }),
            keepUnusedDataFor: 5 * 60 * 1000, // milliseconds
        }),

        addUserProfile: builder.mutation<any, Partial<any>>({
            query: (userProfile) => ({
                url: API_URLS.userProfileCreate,
                method: 'POST',
                body: userProfile,
            }),
        }),

        updateUserProfile: builder.mutation<any, { id: string | undefined; userProfile: Partial<any> }>({
            query: ({ id, userProfile }) => ({
                url: `${API_URLS.userProfileUpdate}/${id}`,
                method: 'POST',
                body: userProfile,
            }),
        }),

        getUserProfileByUsername: builder.mutation<any, { userProfile: Partial<any> }>({
            query: ({ userProfile }) => ({
                url: `${API_URLS.userProfileGetByUsername}`,
                method: 'POST',
                body: userProfile
            }),
        }),

        deleteUserProfile: builder.mutation<void, string | undefined>({
            query: (id) => ({
                url: `${API_URLS.userProfileDelete}/${id}`,
                method: 'POST',
            }),
        }),
    }),
});

export const {
    useAddUserProfileMutation,
    useDeleteUserProfileMutation,
    useGetUserProfileByUsernameMutation,
    useGetUserProfileQuery,
    useUpdateUserProfileMutation,
} = userProfileApi;
