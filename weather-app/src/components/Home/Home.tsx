import * as React from "react";
import type { RootState } from "../../Store/Weather.store";
import { useSelector } from "react-redux";
import { Container } from "./Home.styles";

const backgroundSelector = (temperature: number | undefined) => {
	if (temperature) {
		if (temperature < -50) {
			return "radial-gradient(circle, rgba(0,3,50,1) 0%, rgba(49,44,158,1) 100%)";
		} else if (temperature >= -50 && temperature < -25) {
			return "radial-gradient(circle, rgba(0,36,50,1) 0%, rgba(44,92,158,1) 100%)";
		} else if (temperature >= -25 && temperature < -0) {
			return "radial-gradient(circle, rgba(0,50,39,1) 0%, rgba(44,158,140,1) 100%)";
		} else if (temperature >= 0 && temperature < 15) {
			return "radial-gradient(circle, rgba(107,64,30,1) 0%, rgba(228,125,60,1) 100%)";
		} else if (temperature >= 15 && temperature < 30) {
			return "radial-gradient(circle, rgba(110,0,0,1) 0%, rgba(255,105,105,1) 100%)";
		} else {
			return "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,198,198,1) 100%)";
		}
	} else {
		return "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
	}
};

const Home = () => {
	const temperature: number | undefined = useSelector(
		(state: RootState) => state.temperature.value
	);
	return (
		<Container style={{ backgroundImage: backgroundSelector(temperature) }}>
			{temperature && `Current Temperature: ${temperature ?? ""}`}
			{temperature && <span>&#176;</span>}
			{temperature && "C"}
		</Container>
	);
};

export default Home;
