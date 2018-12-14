import dotenv from "dotenv";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row } from "reactstrap";
import Navigation from "./components/Navigation";
import CardSearch from "./components/CardSearch";

dotenv.load();

class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			input:""
		}
		this.testParent= this.testParent.bind(this);
	}
	testParent(data){
		console.log(`Parent: ${data}`);
	}
	render() {
		return (
			<main>
				<Navigation />
				<Container className="container-main">
					<Row>
					<CardSearch input={this.testParent}/>
					</Row>
				</Container>
			</main>
		);
	}
}

export default App;
