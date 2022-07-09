import React from "react";
// Styling
import "./App.css";
// Components
import TopNav from "./components/TopNav/TopNav";
import Home from "./components/Home/Home";
import Wrapper from "./components/Wrapper/Wrapper";
import { WeatherProvider } from "./Store/Weather.provider";

function App() {
	return (
		<WeatherProvider>
			<Wrapper>
				<TopNav />
				<Home />
			</Wrapper>
		</WeatherProvider>
	);
}

export default App;
