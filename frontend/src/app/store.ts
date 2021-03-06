import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { toDoApi } from "../services/toDo";

export const store = configureStore({
  reducer: {
    [toDoApi.reducerPath]: toDoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(toDoApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
