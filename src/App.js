import dotenv from "dotenv";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import CardSearch from "./components/CardSearch";
import CardViewer from "./components/CardViewer";
import CardDetails from "./components/CardDetails";
import Credits from "./components/Credits";

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
			<Router>
				<main>
					<Navigation />
					<Container className="container-main">
						<CardSearch search={this.foundCards} />
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
							<Route exact path="/credits" component={Credits} />
							<Route path="/:cardId" component={CardDetails} />
						</Switch>
					</Container>
				</main>
			</Router>
		);
	}
}

export default App;
