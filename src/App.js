import dotenv from "dotenv";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row } from "reactstrap";
import Navigation from "./components/Navigation";
import CardSearch from "./components/CardSearch";
import CardViewer from "./components/CardViewer";

dotenv.load();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: []
		};
		this.foundCards = this.foundCards.bind(this);
	}
	foundCards(data) {
		this.setState(prevState => {
			return { cards: data.cards };
		});
	}
	render() {
		return (
			<main>
				<Navigation />
				<Container className="container-main">
					<CardSearch search={this.foundCards} />
					<CardViewer cards={this.state.cards} />
				</Container>
			</main>
		);
	}
}

export default App;
