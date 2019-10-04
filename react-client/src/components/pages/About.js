import React from 'react';
import styled from 'styled-components';
import portrait from '../../assets/SelfImg.jpeg';
import Skills from './Skills';

export default function About(props) {
	return (
		<AboutContainer>
			<h3>About me</h3>
			<div className='about'>
				<img src={portrait} alt='' />
				<p>
					Hey, there my name is alexander santos I am a developer in Atlanta. I
					work with web technologies including Node.JS and React. I also love
					hardware and consider my self a full blown geek when it comes to
					hardware.
				</p>
			</div>
			<Skills />
		</AboutContainer>
	);
}

const AboutContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px auto;
	width: 80%;
	img {
		border-radius: 50%;
		width: 25vw;
		height: 25vh;
		margin: auto;
	}
	.about {
		width: 100%;
		display: flex;
		p {
			margin: 10px;
			width: calc(100% - 20vw);
		}
		a {
			text-decoration: none;
			color: transparent;
		}
	}
	@media only screen and (max-width: 700px) {
		.about {
			flex-direction: column;
			align-items: center;
		}
	}
`;
