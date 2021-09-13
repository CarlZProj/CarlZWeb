import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
	FooterContainer,
	FooterWrap,
	SocialLogo,
	WebsiteRights,
} from "./styles";

const Footer = () => {
	const navHome = () => {
		scroll.scrollToTop();
	};

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialLogo to="/" onClick={navHome}>
					CarlZWeb
				</SocialLogo>
				<WebsiteRights>
					CarlZWeb {new Date().getFullYear()} rights reserved.
				</WebsiteRights>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
