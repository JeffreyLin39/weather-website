import React from "react";
// Styling
import "./App.css";
// Components
import TopNav from "./components/TopNav/TopNav";
import Home from "./components/Home/Home";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
	return (
		<React.Fragment>
			<Wrapper>
				<TopNav />
				<Home />
			</Wrapper>
		</React.Fragment>
	);
}

export default App;
