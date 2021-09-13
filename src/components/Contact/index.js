import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { SectionContainer, InfoWrapper, InfoRow } from "../Section/styles";
import {
	Column1,
	TextWrapper,
	Heading,
	Telephone,
	SocialIcons,
	SocialIconLink,
	Column2,
	ImgWrap,
	Img,
} from "./styles";

const About = ({ mainStyle }) => {
	return (
		<SectionContainer mainBg={mainStyle} id={"contact"}>
			<InfoWrapper>
				<InfoRow imgStart={false}>
					<Column1>
						<TextWrapper>
							<Heading text={mainStyle}>Contact</Heading>
						</TextWrapper>
						<Telephone>Cell: (647)-852-2518</Telephone>
						<SocialIcons>
							<SocialIconLink
								href="mailto:c624zhan@uwaterloo.ca"
								target="_blank"
								aria-label="Email"
							>
								<MdEmail />
							</SocialIconLink>
							<SocialIconLink
								href="//www.linkedin.com/in/carl-zhang-5691731a4/"
								target="_blank"
								aria-label="Linkedin"
							>
								<FaLinkedin />
							</SocialIconLink>
							<SocialIconLink
								href="//www.github.com/CarlZProj/"
								target="_blank"
								aria-label="Github"
							>
								<FaGithub />
							</SocialIconLink>
							<SocialIconLink
								href="//www.instagram.com/carlz_hi/"
								target="_blank"
								aria-label="Instagram"
							>
								<FaInstagram />
							</SocialIconLink>
						</SocialIcons>
					</Column1>
					<Column2>
						<ImgWrap>
							<Img
								src={require("../../assets/images/contact.svg").default}
								alt={"contact"}
							/>
						</ImgWrap>
					</Column2>
				</InfoRow>
			</InfoWrapper>
		</SectionContainer>
	);
};

export default About;
