import React, { useState } from 'react';
import styled from 'styled-components';
import {
	FaBars,
	FaTimes,
	FaUser,
	FaEnvelope,
	FaGit,
	FaBookOpen
} from 'react-icons/fa';

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
				<NavItem linkName='about' url='./pages/about.html'>
					<FaUser />
				</NavItem>
				<NavItem linkName='portfolio' url='./pages/portfolio.html'>
					<FaBookOpen />
				</NavItem>
				<NavItem linkName='contact' url='https://google.com'>
					<FaEnvelope />
				</NavItem>
				<NavItem linkName='github' url='https://github.com/asantoss'>
					<FaGit />
				</NavItem>
			</NavLinkContainer>
		</NavigationElement>
	);
}

function NavItem(props) {
	const NavItemElement = styled.div`
		margin: 10px;
		> a {
			color: #c4c4c4;
			text-decoration: none;
			font-size: 24px;
			line-height: 28px;
			text-align: center;
			font-family: 'Ubuntu Mono', monospace;
			font-weight: 200;
		}
		:hover {
			cursor: pointer;
			opacity: 0.5;
		}
		@media screen and (max-width: 700px) {
			border-top: 0.5px solid #c4c4c4;
			margin: 10px;
			display: flex;
			justify-content: space-between;
			padding: 5px;
			align-items: center;
		}
	`;
	const Icon = styled.div`
		text-align: center;
		font-family: FontAwesome;
		color: #c4c4c4;
	`;
	return (
		<NavItemElement>
			<a href={props.url}>{props.linkName}</a>
			<Icon>{props.children}</Icon>
		</NavItemElement>
	);
}

const Burger = styled.div`
	display: none;
	font-size: 35px;
	margin: 20px;
	@media only screen and (max-width: 700px) {
		display: flex;
	}
`;
const Logo = styled.div`
	background-color: #c4c4c4;
	border-radius: 50%;
	width: 85px;
	height: 85px;
	margin: 10px;
	@media screen and (max-width: 700px) {
		width: 50px;
		height: 50px;
	}
`;
const NavLinkContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 70%;
	margin: 20px;
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
		height: ${props => (props.isExpanded ? '50vh' : '10vh')};
		flex-direction: column;
		> .nav-logo {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}
	}
`;
