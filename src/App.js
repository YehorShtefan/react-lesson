import React, { Component } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

import './App.css';
 

class App extends Component {
	state = {
			users: [
				{ name: 'Mile', age: 53 },
				{ name: 'John', age: 27 },
				{ name: 'Criss', age: 33 }
			]
		}
	
	render () {
		const {users} = this.state;
		
		return (
			<div className="App">
				<Header />
      
				<div className="main">
					<Sidebar />
					<Content users= {users} />
				</div>
      
				<Footer />
			</div>
		);
	};
}

export default App;