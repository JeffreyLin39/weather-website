import * as React from "react";
// Styled components
import { Container } from "./Wrapper.styles";

interface IWrapperProps {
	children: React.ReactNode;
}

const Wrapper: React.FunctionComponent<IWrapperProps> = (props) => {
	return <Container>{props.children}</Container>;
};

export default Wrapper;
