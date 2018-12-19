import React from "react";
import axios from "axios";
import { Row } from "reactstrap";
import ErrorDetails from "./ErrorDetails";
import PokemonDetails from "./PokemonDetails";
import TrainerDetails from "./TrainerDetails";

let details;

class CardDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardData: null,
			error: null
		};
		this.initData = this.initData.bind(this);
	}
	initData() {
		return axios
			.get(
				`${process.env.REACT_APP_API_ENDPOINT}/${
					this.props.match.params.cardId
				}`
			)
			.then(response => {
				return response.data.card;
			})
			.catch(err => {
				return Promise.reject(err);
			});
	}
	componentDidMount() {
		if (this.props.location.state) {
			this.setState(prevState => {
				return { cardData: this.props.location.state };
			});
		} else {
			this.initData()
				.then(data => {
					return this.setState({ cardData: data });
				})
				.catch(err => {
					return this.setState({ error: "No card matches for given ID" });
				});
		}
	}
	render() {
		if (this.state.cardData !== null) {
			if (this.state.error) {
				details = <ErrorDetails error={this.state.error} />;
			} else {
				details =
					this.state.cardData.supertype === "Pokémon" ? (
						<PokemonDetails cardData={this.state.cardData} />
					) : (
						<TrainerDetails cardData={this.state.cardData} />
					);
			}
		}
		return <Row>{details}</Row>;
	}
}

export default CardDetails;
