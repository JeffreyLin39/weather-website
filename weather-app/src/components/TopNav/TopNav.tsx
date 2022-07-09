import * as React from "react";
// Stores
import { useDispatch } from "react-redux";
import { update } from "../../Store/Weather.reducer";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// Styles
import { SearchBar, Button, Wrapper } from "./TopNav.styles";

const TopNav = () => {
	// States
	const [value, setValue] = React.useState<string>("");
	// Store
	const dispatch = useDispatch();
	// Handlers
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
			.then((response) => dispatch(update(response.current.temp_c)))
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
