import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components//pages/Hero';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Projects from './components/pages/Projects';

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Route
					exact
					path='/'
					render={() => (
						<Hero
							heroName='Alexander Santos Santana'
							heroDescription='Full-Stack Web Developer who focuses on writing efficient, well
						tested, & clean systems.'
						/>
					)}
				/>
				<Route path='/about' component={About} />
				<Route path='/projects' component={Projects} />
				{/* <Skills /> */}
			</div>
		</Router>
	);
}

export default App;
