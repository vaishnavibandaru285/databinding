import React, { Component } from 'react';

class App extends Component {

constructor() {
	super();
	this.state = {
	subject: ""
	};
}

handleChange = event => {
	this.setState({
	subject: event.target.value
	})
}

render() {
	return (
	<div>
		<h4 style={{ color: "#68cf48" }}>GeeksForGeeks</h4>
		<input placeholder="Enter Subject"
		onChange={this.handleChange}></input>
		<p><b>{this.state.subject}</b> Tutorial</p>

	</div>
	)
}
}

export default App;
