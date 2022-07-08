import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { SearchBar, Button, Wrapper } from "./TopNav.styles";

const TopNav = () => {
	const [value, setValue] = React.useState<string>("");

	const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Enter") {
			handleAPISearch();
		}
	};

	const handleAPISearch = () => {
		fetch(
			"https://api.weatherapi.com/v1/current.json?" +
				new URLSearchParams({
					key: process.env.REACT_APP_API_KEY ?? "",
					q: value,
				})
		)
			.then((response) => response.json())
			.catch((error) => console.error(error))
			.then((response) => console.log(JSON.stringify(response)))
			.catch((error) => console.error(error));
	};

	return (
		<>
			<Wrapper>
				<SearchBar
					type={"text"}
					value={value}
					onChange={handleSearchBar}
					onKeyDown={handleKeyDown}
					placeholder={"Search a location..."}
				/>
				<Button onClick={handleAPISearch}>
					<FontAwesomeIcon icon={faArrowRight} />
				</Button>
			</Wrapper>
		</>
	);
};

export default TopNav;
