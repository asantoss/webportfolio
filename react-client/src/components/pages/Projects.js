import React from 'react';
import styled from 'styled-components';
export default function Projects() {
	return (
		<ProjectsContainer>
			<h1>Web Development Projects</h1>
			<div className='projects'>
				<ProjectCard
					description='This is a simple app about nothing'
					name='My App 1'
					codeURL='https://google.com/'
				/>
				<ProjectCard description='Simple project' name='Project1' />
				<ProjectCard description='Simple project' name='Project1' />
				<ProjectCard description='Simple project' name='Project1' />
			</div>
		</ProjectsContainer>
	);
}

function ProjectCard(props) {
	return (
		<ProjectCardElement color='red'>
			<img
				src={props.imgUrl ? props.imgUrl : 'https://via.placeholder.com/150'}
				alt=''
			/>
			<h3>{props.name}</h3>
			<p>{props.description}</p>
			<div>
				<a href={props.codeURL}>Code</a>
				<a href={props.liveSite}>Site</a>
			</div>
		</ProjectCardElement>
	);
}
const ProjectsContainer = styled.div`
	font-family: 'Ubuntu Mono';
	color: ${props => props.color};
	width: 80vw;
	height: 80vh;
	margin: 0 auto;
	.projects {
		width: 100%;
		justify-content: center;
		display: flex;
		flex-wrap: wrap;
	}
`;

const ProjectCardElement = styled.div`
	border: 2px solid #333333;
	text-align: center;
	border-radius: 3px;
	display: flex column;
	margin: 5px 20px;
	width: 200px;
	height: fit-content;
	padding: 5px;
	justify-content: center;
	align-items: center;
	text-align: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	p {
		font-weight: 100;
	}
	img {
		border-radius: 3px;
		border: 1px solid #333333;
	}
	padding: 10px;
	a {
		background-color: #444444;
		text-decoration: none;
		color: white;
		border: 2px solid white;
		border-radius: 8px;
		padding: 5px;
	}
	a:hover {
		background-color: transparent;
	}
`;
