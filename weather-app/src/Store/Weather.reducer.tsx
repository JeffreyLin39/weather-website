import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ITemperatureState {
	value: number | undefined;
}

const initialState: ITemperatureState = {
	value: undefined,
};

export const temperatureSlice = createSlice({
	name: "temperature",
	initialState,
	reducers: {
		update: (state, action: PayloadAction<number>) => {
			state.value = action.payload;
		},
	},
});

export const { update } = temperatureSlice.actions;

export default temperatureSlice.reducer;
