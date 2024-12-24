import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const jsonPlaceholderApi = createApi({
    reducerPath: "jsonPlaceholderApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({ query: () => 'posts' }),
        createPost: builder.mutation({
            query: (newPost) => {
                console.log(newPost);
                return {
                    url: 'posts',
                    method: 'POST',
                    body: newPost,
                };
            }
        })
    })
})

export const { useGetPostsQuery, useCreatePostMutation } = jsonPlaceholderApi