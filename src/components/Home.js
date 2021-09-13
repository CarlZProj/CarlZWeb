import React, { useState } from "react";
import styled from "styled-components";

import NavBar from "./NavBar/index";
import SideBar from "./Sidebar/index";
import HeroSection from "./HeroSection/index";
import About from "./About/index";
import Project from "./Project/index";
import Contact from "./Contact/index";
import Footer from "./Footer/index";

const Body = styled.div`
	overflow-x: hidden;
`;

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<React.Fragment>
			<NavBar toggle={toggle} />
			<Body>
				<SideBar isOpen={isOpen} toggle={toggle} />
				<HeroSection />
				<About mainStyle={true} />
				<Project mainStyle={false} />
				<Contact mainStyle={true} />
				<Footer />
			</Body>
		</React.Fragment>
	);
};

export default Home;
