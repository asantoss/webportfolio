import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';
import {
	FaBars,
	FaTimes,
	FaUser,
	FaEnvelope,
	FaGit,
	FaBookOpen,
	FaLinkedin,
	FaHome
} from 'react-icons/fa';
import { ContactMe } from './ContactMe';

export default function NavBar(props) {
	const [isExpanded, setExpand] = useState(false);
	return (
		<NavigationElement isExpanded={isExpanded}>
			<div className='nav-logo'>
				<Logo />
				<Burger onClick={() => setExpand(!isExpanded)}>
					{isExpanded ? <FaTimes /> : <FaBars />}
				</Burger>
			</div>
			<NavLinkContainer isExpanded={isExpanded}>
				<NavLink activeClassName='location' exact to='/'>
					<NavItem linkName='home'>
						<FaHome />
					</NavItem>
				</NavLink>
				<NavLink activeClassName='location' to='/about'>
					<NavItem linkName='about'>
						<FaUser />
					</NavItem>
				</NavLink>
				<NavLink activeClassName='location' to='/projects'>
					<NavItem linkName='projects'>
						<FaBookOpen />
					</NavItem>
				</NavLink>
				<ContactMe />
			</NavLinkContainer>
		</NavigationElement>
	);
}

const Burger = styled.div`
	display: none;
	font-size: 35px;
	margin: 20px;
	color: white;
	@media only screen and (max-width: 700px) {
		display: flex;
	}
`;
const Logo = styled.div`
	background-color: #c4c4c4;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	margin: 10px;
	@media screen and (max-width: 700px) {
		width: 50px;
		height: 50px;
	}
`;
const NavLinkContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 80%;
	margin: 20px;
	> .location {
		opacity: 0.5;
	}
	> a {
		text-decoration: none;
	}
	@media screen and (max-width: 700px) {
		flex-direction: column;
		width: 100%;
		font-size: 20px;
		display: ${props => (props.isExpanded ? 'flex' : 'none')};
		flex-direction: column;
		justify-content: space-around;
	}
`;

const NavigationElement = styled.nav`
	transition: height 0.5s;
	width: 80vw;
	height: 10vh;
	margin: auto;
	background-color: #111111;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	@media only screen and (max-width: 700px) {
		display: flex;
		height: ${props => (props.isExpanded ? '40vh' : '10vh')};
		flex-direction: column;
		> .nav-logo {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}
	}
`;

styled.div``;
