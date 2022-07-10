import * as React from "react";
// Stores
import { useDispatch } from "react-redux";
import { update } from "../../Store/Weather.reducer";
// Components
import HistoryViewer from "../HistoryViewer/HistoryViewer";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// Styles
import { SearchBar, Button, Wrapper } from "./TopNav.styles";

const TopNav = () => {
	// States
	const [value, setValue] = React.useState<string>("");
	const [focused, setFocused] = React.useState(false);
	const [storage, setStorage] = React.useState<string[]>(
		sessionStorage?.getItem("queries")?.split("~") ?? []
	);
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

	const updateSessionStorage = () => {
		if (sessionStorage.length === 0) {
			sessionStorage.setItem("queries", value);
			setStorage([value]);
		} else if (!storage.includes(value)) {
			const queries: string[] = [...storage];
			if (storage.length > 4) {
				queries.pop();
			}
			queries.unshift(value);
			setStorage(queries);
			sessionStorage.setItem("queries", queries.join("~"));
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
			.then((response) => {
				if (response.error) {
					dispatch(update(undefined));
				} else {
					updateSessionStorage();
					dispatch(update(response.current.temp_c));
					setValue("");
				}
			})
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
					onFocus={() => setFocused(true)}
					onBlur={() => setTimeout(() => setFocused(false), 200)}
				/>
				{sessionStorage.length > 0 && focused && (
					<HistoryViewer queries={storage} />
				)}
				<Button onClick={handleAPISearch}>
					<FontAwesomeIcon icon={faArrowRight} />
				</Button>
			</Wrapper>
		</>
	);
};

export default TopNav;
