import React from 'react';
import styled from 'styled-components';
import heroImg from '../../assets/herobg.jpg';
import Skills from './Skills';

export default function Hero(props) {
	return (
		<HeroContainer className='hero-container'>
			<HeroImg image={heroImg}>
				<HeroInfo>
					<h3>{props.heroName}</h3>
					<hr />
					<h3>{props.heroDescription}</h3>
				</HeroInfo>
			</HeroImg>
			<Skills direction='row' />
		</HeroContainer>
	);
}

const HeroContainer = styled.section`
	width: 80vw;
	height: 75vh;
	margin: auto;
	border-radius: 5px;
	margin-top: 20px;
	display: flex;
	text-align: center;
	color: #c4c4c4;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
`;

const HeroImg = styled.div`
	margin: auto;
	display: flex;
	width: 95%;
	height: 95%;
	background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
		url(${({ image }) => image});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const HeroInfo = styled.div`
	width: 40%;
	margin: auto;
	align-self: center;
	> h3 {
		font-family: Ubuntu Mono;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 30px;
		font-weight: bold;
	}
`;
