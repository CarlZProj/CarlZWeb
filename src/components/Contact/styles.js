import styled from "styled-components";

import Color from "../../assets/colors";

export const Column1 = styled.div`
	padding: 15px 10px 0 50px;
	grid-area: col1;
`;

export const Column2 = styled.div`
	padding: 15px 10px 0 10px;
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 20px;
	padding-bottom: 30px;
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.6px;
	font-weight: 600;
	color: ${({ text }) => (text ? Color.black : Color.white)};

	@media screen and (max-width: 768px) {
		font-size: 32px;
	}
`;

export const Telephone = styled.p`
	font-size: 16px;
	padding-bottom: 20px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	width: 120px;
	flex-direction: row;
	margin-left: -25px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		margin-left: 0px;
	}
`;

export const SocialIconLink = styled.a`
	color: ${Color.black};
	font-size: 50px;
	padding: 0 25px;
	z-index: 2;

	&:hover {
		transform: scale(1.75);
		transition: all 0.3s ease-in-out;
		cursor: pointer;
	}
`;

export const ImgWrap = styled.div`
	max-width: 500px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin-left: 100px;
	margin-bottom: 10px;

	@media screen and (max-width: 768px) {
		margin-left: -50px;
		margin-bottom: 0;
	}
`;
