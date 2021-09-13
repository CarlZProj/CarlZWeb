import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import Color from "../../assets/colors.js";

export const Nav = styled.nav`
	/* position */
	position: sticky;
	top: 0;
	z-index: 2;

	/* display */
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100px;
	margin-top: -100px;
	align-items: center;

	/* color */
	background: ${({ isScrolled }) =>
		isScrolled ? Color.dark_blue : Color.clear};

	/* text */
	font-size: 1.5rem;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavBarContainer = styled.div`
	z-index: 1;

	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100px;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavTitle = styled(LinkRouter)`
	justify-self: flex-start;
	display: flex;
	align-items: center;
	margin-left: 24px;

	color: ${Color.main};

	font-weight: bold;
	text-decoration: none;
	font-size: 3rem;

	cursor: pointer;
`;

export const MenuIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		position: absolute;
		top: 0;
		right: 0;

		display: block;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;

		color: ${Color.main};

		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;

	text-align: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 100px;
`;

export const NavLink = styled(LinkScroll)`
	display: flex;
	align-items: center;
	padding: 0 3rem;
	height: 100%;

	color: ${Color.main};

	text-decoration: none;

	cursor: pointer;

	&:hover {
		background-color: ${Color.dark_slate_gray};
	}

	&.active {
		border-bottom: 10px solid ${Color.main};
	}
`;
