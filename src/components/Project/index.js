import React from "react";

import ZCraftProject from "../../assets/images/zcraft.PNG";
import BufferGIF from "../../assets/videos/buffer.gif";

import { SectionContainer } from "../Section/styles";
import {
	Heading,
	ProjectContainer,
	ProjectWrapper,
	ProjectCard,
	ProjectH,
	ProjectP,
	ProjectIcon,
	ProjectBufferGIF,
} from "./styles";

const Project = ({ mainStyle }) => {
	return (
		<SectionContainer mainStyle={mainStyle} id={"projects"}>
			<Heading textColor={mainStyle}>Projects</Heading>
			<ProjectContainer>
				<ProjectWrapper>
					<ProjectCard
						href="//www.github.com/CarlZProj/Z-Craft/"
						target="_blank"
						aria-label="Github Link - ZCraft"
					>
						<ProjectH>ZCraft</ProjectH>
						<ProjectIcon src={ZCraftProject} />
						<ProjectP>Aircraft Shoot'em Up Game</ProjectP>
					</ProjectCard>
					<ProjectCard>
						<ProjectH>Coming Soon</ProjectH>
						<ProjectBufferGIF src={BufferGIF} alt={"project coming soon"} />
					</ProjectCard>
					<ProjectCard>
						<ProjectH>Coming Soon</ProjectH>
						<ProjectBufferGIF src={BufferGIF} alt={"project coming soon"} />
					</ProjectCard>
				</ProjectWrapper>
			</ProjectContainer>
		</SectionContainer>
	);
};

export default Project;
