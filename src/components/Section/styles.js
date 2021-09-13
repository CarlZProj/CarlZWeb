import styled from "styled-components";

import Color from "../../assets/colors";

export const SectionContainer = styled.div`
	background: ${({ mainBg }) => (mainBg ? Color.main : Color.black)};

	@media screen and (max-width: 768px) {
		padding: 20px 0;
	}
`;

export const InfoWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 900px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	justify-content: center;

	@media screen and (max-width: 768px) {
		height: 100%;
	}
`;

export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, lfr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2 col1'` : `'col1 col2'`};

	/* @media screen and (max-width: 768px) {
		grid-template-areas: ${({ imgStart }) =>
		imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`};
	} */
`;
