import { api } from "../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `/signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    getUser: builder.mutation({
      query: (data) => ({
        url: `/getUser`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/updateUser`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useCreateUserMutation,useGetUserMutation, useUpdateUserMutation } = userApi;
