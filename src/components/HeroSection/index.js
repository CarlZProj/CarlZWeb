import React from "react";

import Video from "../../assets/videos/hello_world.mp4";

import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	Arrow,
} from "./styles";

const Hero = () => {
	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>I'm Carl Zhang</HeroH1>
				<HeroP>More About Me</HeroP>
				<Arrow />
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
