// Stores
import { useDispatch } from "react-redux";
import { update } from "../../Store/Weather.reducer";

import { Wrapper, Table, TableRow, TableData } from "./HistoryViewer.styles";

const HistoryViewer = () => {
	// Store
	const dispatch = useDispatch();

	const handleAPISearch = (value: string) => {
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
				dispatch(update(response.error ? undefined : response.current.temp_c));
			})
			.catch((error) => console.error(error));
	};

	const queries: string[] =
		sessionStorage?.getItem("queries")?.split("~") ?? [];
	return (
		<Wrapper>
			<Table>
				{queries.length > 0 &&
					queries.map((query, index) => (
						<TableRow key={index} onClick={() => handleAPISearch(query)}>
							<TableData>{query}</TableData>
						</TableRow>
					))}
			</Table>
		</Wrapper>
	);
};

export default HistoryViewer;
