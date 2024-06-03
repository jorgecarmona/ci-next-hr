import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

type AuthResponse = {
  token: string;
};

type LoginCredentials = {
  email: string;
  password: string;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/auth",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    }
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: JSON.stringify(credentials)
      })
    })
  })
});

export const {useLoginMutation} = authApi;
