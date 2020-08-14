import React, { Component } from 'react'
import './App.scss'
import Home from './pages/home/index'
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				<Home></Home>
			</div>
		)
	}
}

export default App

// ReactDom.render(<App />,document.getElementById('root'));
