import React from 'react';
import { FaCss3, FaJs, FaReact, FaHtml5, FaDatabase } from 'react-icons/fa';
import styled from 'styled-components';

export default function Skills(props) {
	return (
		<TechIconsContainer>
			<TechIcons {...props}>
				<div>
					<p>CSS3</p>
					<FaCss3 />
				</div>
				<div>
					<p>HTML5</p>
					<FaHtml5 />
				</div>
				<div>
					<p>JavaScript</p>
					<FaJs />
				</div>
				<div>
					<p>React</p>
					<FaReact />
				</div>
				<div>
					<p>PostgreSQL</p>
					<FaDatabase />
				</div>
			</TechIcons>
		</TechIconsContainer>
	);
}

const TechIconsContainer = styled.div`
	width: 80%;
	margin: 5px auto;
	h4 {
		color: #444444;
		font-weight: bolder;
	}
`;

const TechIcons = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	flex-direction: ${({ direction }) => direction};
	font-size: 25px;
	color: #444444;
	font-weight: 100;
	> div {
		:hover {
			cursor: pointer;
			opacity: 0.5;
		}
		> p {
			font-size: 0.8rem;
		}
	}
`;
