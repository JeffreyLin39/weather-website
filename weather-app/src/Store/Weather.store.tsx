import { configureStore } from "@reduxjs/toolkit";
import temperatureReducer from "./Weather.reducer";

export const weatherStore = configureStore({
	reducer: { temperature: temperatureReducer },
});

export type RootState = ReturnType<typeof weatherStore.getState>;
export type AppDispatch = typeof weatherStore.dispatch;
