import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	position: absolute;
	margin-top: 10rem;
`;

export const Table = styled.table`
	color: black;
	font-size: 1.5rem;
	background-color: white;
	padding: 10px;
	width: 33.2%;
	border-radius: 20px;
	margin-right: 70px;
`;

export const TableRow = styled.tr`
	width: 100%;
	cursor: pointer;
	:hover {
		background-color: #f1f1f1;
	}
	:active {
		background-color: #c2c2c2;
	}
`;

export const TableData = styled.td`
	padding: 10px;
	width: 100%;
	text-align: center;
`;
