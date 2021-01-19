import React, { Component } from 'react'
import './assets/scss/App.scss'
import Home from './pages/home/index.jsx'
import Header from './pages/header/index.jsx'
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<Header></Header>
				<Home></Home>
			</div>
		)
	}
}

export default App

// ReactDom.render(<App />,document.getElementById('root'));
