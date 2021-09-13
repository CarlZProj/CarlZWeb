import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";

import {
	Nav,
	NavBarContainer,
	NavTitle,
	MenuIcon,
	NavMenu,
	NavItem,
	NavLink,
} from "./styles";

const NavBar = ({ toggle }) => {
	const [isScrolled, setScroll] = useState(false);

	const checkScrolling = () => {
		if (window.scrollY >= 100) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrolling);
	});

	const navHome = () => {
		scroll.scrollToTop();
	};

	return (
		<Nav isScrolled={isScrolled}>
			<NavBarContainer>
				<NavTitle to="/" onClick={navHome}>
					CarlZWeb
				</NavTitle>
				<MenuIcon onClick={toggle}>
					<FaBars />
				</MenuIcon>
				<NavMenu>
					<NavItem>
						<NavLink
							to="about"
							smooth={true}
							duration={300}
							spy={true}
							exact={true}
							offset={-100}
						>
							About
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="projects"
							smooth={true}
							duration={300}
							spy={true}
							exact={true}
							offset={-100}
						>
							Projects
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="contact"
							smooth={true}
							duration={300}
							spy={true}
							exact={true}
							offset={-100}
						>
							Contact
						</NavLink>
					</NavItem>
				</NavMenu>
			</NavBarContainer>
		</Nav>
	);
};

export default NavBar;
