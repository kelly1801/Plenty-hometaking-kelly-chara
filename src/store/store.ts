import { configureStore } from "@reduxjs/toolkit";
import shortenReducer from "./shortenSlice";
const store = configureStore({
  reducer: {
    links: shortenReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
