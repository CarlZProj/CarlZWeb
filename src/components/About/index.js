import React from "react";

import { SectionContainer, InfoWrapper, InfoRow } from "../Section/styles";
import {
	Column1,
	TextWrapper,
	Heading,
	Description,
	BtnWrap,
	ResumeDownload,
	DownloadIcon,
	Column2,
	ImgWrap,
	Img,
} from "./styles";

const About = ({ mainStyle }) => {
	return (
		<SectionContainer mainBg={mainStyle} id={"about"}>
			<InfoWrapper>
				<InfoRow imgStart={true}>
					<Column1>
						<TextWrapper>
							<Heading text={mainStyle}>About</Heading>
							<Description text={mainStyle}>
								Hi, I'm Carl Zhang, currently studying Computer Engineering (3B)
								at the University of Waterloo.
								<br />
								<br />I GAME a lot! It's the prime reason why I started
								programming. Like gaming, programming is full of challenges and
								new opportunities to learn.
								<br />
								<br />
								Languages: Java, C++, Python, HTML, CSS, JS
								<br />
								<br />
								Interests: Badminton, Skiing, Video Games
								<br />
								<br />
								Currently looking for Winter 2023 Internship Opportunities
							</Description>
							<BtnWrap>
								<ResumeDownload
									to="/assets/Fall_2022_V2.pdf"
									target="_blank"
									download
									resumeStyle={mainStyle}
								>
									Resume
									<DownloadIcon />
								</ResumeDownload>
							</BtnWrap>
						</TextWrapper>
					</Column1>
					<Column2>
						<ImgWrap>
							<Img
								src={require("../../assets/images/carl.jpg").default}
								alt={"carl"}
							/>
						</ImgWrap>
					</Column2>
				</InfoRow>
			</InfoWrapper>
		</SectionContainer>
	);
};

export default About;
