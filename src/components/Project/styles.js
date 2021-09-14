import styled from "styled-components";

import Color from "../../assets/colors";

export const Heading = styled.h1`
	padding-top: 100px;
	text-align: center;
	font-size: 48px;
	line-height: 1.6px;
	font-weight: 600;
	color: ${({ textColor }) => (textColor ? Color.black : Color.white)};

	@media screen and (max-width: 768px) {
		font-size: 32px;
	}
`;

export const ProjectContainer = styled.div`
	/* update height when projects added */
	height: 600px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 480px) {
		height: 1000px;
	}
`;

export const ProjectWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 25px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const ProjectCard = styled.a`
	background: ${Color.main};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	height: 300px;
	width: 200px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transform: scale(1.05);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const ProjectH = styled.h2`
	font-size: 1rem;
	color: ${Color.black};
`;

export const ProjectIcon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

export const ProjectP = styled.p`
	font-size: 1rem;
	color: ${Color.black};
	margin-bottom: 10px;
	text-align: center;
`;

export const ProjectBufferGIF = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
	-o-object-fit: cover;
	object-fit: cover;
`;
