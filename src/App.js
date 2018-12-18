import dotenv from "dotenv";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import CardSearch from "./components/CardSearch";
import CardViewer from "./components/CardViewer";
import CardDetails from "./components/CardDetails";

dotenv.load();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [],
			init: true
		};
		this.foundCards = this.foundCards.bind(this);
	}
	foundCards(data) {
		this.setState(prevState => {
			return { cards: data.cards, init: false };
		});
	}
	render() {
		return (
			<main>
				<Navigation />
				<Router>
					<Container className="container-main">
						<CardSearch search={this.foundCards}/>
						<Switch>
							<Route
								exact
								path="/"
								render={() => {
									return (
										<CardViewer
											init={this.state.init}
											cards={this.state.cards}
										/>
									);
								}}
							/>
							<Route path="/:cardId" component={CardDetails} />
						</Switch>
					</Container>
				</Router>
			</main>
		);
	}
}

export default App;
