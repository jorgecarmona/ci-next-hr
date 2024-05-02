import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

type User = {
  email: string;
  id: number;
  phone: string;
  username: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
};

type Users = User[];

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com"
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users, void>({
      query: () => "/users"
    })
  })
});

export const {useGetUsersQuery} = usersApi;
