import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api/auth";

type AuthResponse = {
    token: string;
};

type LoginCredentials = {
    username: string;
    password: string;
};

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginCredentials>({
        query: (credentials) => ({
            url: "/login",
            method: "POST",
            body: credentials
        })
        })
    })
});

export const { useLoginMutation } = authApi;
