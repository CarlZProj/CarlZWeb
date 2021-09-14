import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdFileDownload } from "react-icons/md";

import Color from "../../assets/colors";

export const Column1 = styled.div`
	padding: 15px 10px 0 10px;
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

export const Description = styled.p`
	max-width: 440px;
	padding: 40px 0 30px 0;
	font-size: 20px;
	line-height: 24px;
	color: ${({ text }) => (text ? Color.black : Color.white)};

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const ResumeDownload = styled(Link)`
	border-radius: 50px;
	background: ${({ resumeStyle }) => (resumeStyle ? Color.black : Color.white)};
	white-space: nowrap;
	padding: ${({ resumeStyle }) => (resumeStyle ? "14px 48px" : "12px 30px")};
	color: ${({ resumeStyle }) => (resumeStyle ? Color.main : Color.black)};
	font-size: 20px;
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ resumeStyle }) =>
			resumeStyle ? Color.white : Color.main};
	}
`;

export const DownloadIcon = styled(MdFileDownload)`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 20px;
	color: ${({ resumeStyle }) => (resumeStyle ? Color.main : Color.green)};
`;

export const ImgWrap = styled.div`
	max-width: 300px;
	min-width: 100px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;
