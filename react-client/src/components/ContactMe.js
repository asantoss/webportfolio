import React, { useState } from 'react';
import NavItem from './NavItem';
import styled from 'styled-components';
import { FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa';
import copy from 'clipboard-copy';
export function ContactMe() {
	const [Hover, setHoverState] = useState(false);
	return (
		<div
			onClick={() => copy('alexsantosantana@live.com')}
			onMouseEnter={() => setHoverState(!Hover)}
			onMouseLeave={() => setHoverState(!Hover)}>
			{}
			<NavItem linkName='contact'>
				{Hover ? <FaEnvelopeOpen /> : <FaEnvelope />}
				{Hover && (
					<ToolTipContainer label='Click to copy my email to your clipboard' />
				)}
			</NavItem>
		</div>
	);
}
const ToolTip = styled.div`
	position: absolute;
	right: auto;
	top: auto;
	font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	font-style: normal;
	font-weight: 400;
	letter-spacing: normal;
	line-height: 1.42857143;
	text-align: left;
	text-align: start;
	text-shadow: none;
	text-transform: none;
	white-space: normal;
	word-break: normal;
	word-spacing: normal;
	word-wrap: normal;
	font-size: 12px;
	display: inline-block;
	margin-top: -5px;
	.tooltip-arrow {
		top: auto;
		bottom: -5px;
		left: 50%;
		margin-left: -5px;
		border-width: 5px 5px 0;
		border-top-color: #000;
		position: absolute;
		width: 0;
		height: 0;
		border-color: transparent;
		border-right-color: transparent;
		border-style: solid;
	}
	.tooltip-label {
		max-width: 200px;
		padding: 3px 8px;
		color: #c4c4c4;
		text-align: center;
		background-color: black;
		border-radius: 4px;
	}
`;

export const ToolTipContainer = props => {
	return (
		<ToolTip>
			<div className='tooltip-arrow' />
			<div className='tooltip-label'>{props.label}</div>
		</ToolTip>
	);
};
