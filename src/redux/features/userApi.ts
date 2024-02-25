import { api } from "../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: `/getUser`,
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useGetUserQuery } = userApi;



