import * as React from "react";
import type { RootState } from "../../Store/Weather.store";
import { useSelector } from "react-redux";
import { Container } from "./Home.styles";

const Home = () => {
	const temperature: number | undefined = useSelector(
		(state: RootState) => state.temperature.value
	);
	return <Container>{temperature ?? ""}</Container>;
};

export default Home;
