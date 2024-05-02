import {configureStore} from "@reduxjs/toolkit";

// Import API slices
import {usersApi} from "./api-slice/users-slice";

export const store = configureStore({
  reducer: {
    // add API slice reducers
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
