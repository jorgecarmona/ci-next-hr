import {configureStore} from "@reduxjs/toolkit";

// Import API slices
import {usersApi} from "./api-slice/users-slice";
import { authApi } from "./api-slice/auth-slice";

export const store = configureStore({
  reducer: {
    // add API slice reducers
    [usersApi.reducerPath]: usersApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware, authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
