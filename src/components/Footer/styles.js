import styled from "styled-components";
import { Link } from "react-router-dom";

import Color from "../../assets/colors.js";

export const FooterContainer = styled.footer`
	background-color: ${Color.dark_blue};
`;

export const FooterWrap = styled.div`
	padding: 24px 24px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: ${Color.main};
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	font-weight: bold;
`;

export const WebsiteRights = styled.small`
	color: ${Color.white};

	@media screen and (max-width: 820px) {
		margin: 24px 0;
	}
`;
