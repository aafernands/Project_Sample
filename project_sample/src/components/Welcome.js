import { Component } from "react";
import "../App.css";

class Welcome extends Component {
	render() {
		console.log(this.props);
		return (
			<h1>
				Welcome {this.props.name} your age is {this.props.age}
			</h1>
		);
	}
}

export default Welcome;
