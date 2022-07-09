import * as React from "react";
import { weatherStore } from "./Weather.store";
import { Provider } from "react-redux";

interface IWeatherProviderProps {
	children: React.ReactNode;
}

export const WeatherProvider: React.FunctionComponent<IWeatherProviderProps> = (
	props
) => {
	return <Provider store={weatherStore}>{props.children}</Provider>;
};
