import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarLink,
	SidebarMenu,
} from "./styles";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle} offset={-100}>
						About
					</SidebarLink>
					<SidebarLink to="projects" onClick={toggle} offset={-100}>
						Projects
					</SidebarLink>
					<SidebarLink to="contact" onClick={toggle} offset={-100}>
						Contact
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
