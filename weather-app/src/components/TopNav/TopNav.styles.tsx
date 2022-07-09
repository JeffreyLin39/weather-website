import styled from "styled-components";

export const SearchBar = styled.input`
	margin: 3rem;
	width: 30%;
	height: 3.3rem;
	border-radius: 50px;
	padding: 5px 35px;
	border: none;
	font-size: 1.5rem;
	:focus {
		outline: none;
	}
`;

export const Button = styled.button`
	margin: 3rem 0;
	width: 4rem;
	height: 4rem;
	border-radius: 50px;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
	transition: transform ease-in 0.1s;
	&:active {
		transform: scale(0.9);
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 30%;
`;
