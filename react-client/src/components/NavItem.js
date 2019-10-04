import styled from 'styled-components';
import React from 'react';

export default function NavItem(props) {
	const NavItemElement = styled.div`
		margin: 10px;
		> p {
			color: #c4c4c4;
			margin: 0;
			text-decoration: none;
			font-size: 16px;
			line-height: 28px;
			text-align: center;
			font-family: 'Ubuntu Mono', monospace;
			font-weight: 200;
		}
		:hover {
			cursor: pointer;
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
			<p>{props.linkName}</p>
			<Icon>{props.children}</Icon>
		</NavItemElement>
	);
}
