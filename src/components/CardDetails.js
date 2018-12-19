import React from "react";
import axios from "axios";
import { Row } from "reactstrap";

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
				details = (
					<section className="col-sm-12">
						<article className="card spacing">
							<section className="d-flex justify-content-center text-center">
								<h2>{this.state.error}</h2>
							</section>
						</article>
					</section>
				);
			} else {
				console.log(this.state.cardData.ability);
				details = (
					<section className="col-sm-12">
						<article className="card spacing">
							<Row>
								<section className="col-md-6 d-flex align-items-center justify-content-center">
									<img
										src={this.state.cardData.imageUrlHiRes}
										alt={this.state.cardData.id}
										className="card-image"
									/>
								</section>
								<section className="col-md-6 pl-md-0 card-details">
									<h2 className="col-sm-12 text-center">
										{this.state.cardData.name}
									</h2>
									<h3 className="col-sm-12 text-center">
										{this.state.cardData.supertype} -{" "}
										{this.state.cardData.subtype}
									</h3>
									<Row>
										<h3 className="col-md-6 text-center">
											HP: {this.state.cardData.hp}
										</h3>
										<h3 className="col-md-6 text-center">
											Type: {this.state.cardData.types}
										</h3>
									</Row>
									<Row>
										<h3 className="col-md-12 text-center">Ability:</h3>
										<h3 className="col-md-12 text-center">
											{this.state.cardData.ability.name}
										</h3>
										<p className="col-md-12 text-justify">
											{this.state.cardData.ability.text}
										</p>
									</Row>
									<Row className="mb-3">
										<h3 className="col-md-12 text-center">Attacks:</h3>
										<h3 className="col-md-12 text-center">
											{this.state.cardData.attacks[0].name} -{" "}
											{this.state.cardData.attacks[0].damage}
										</h3>
										<span className="col-md-12 text-justify">
											{this.state.cardData.attacks[0].text}
										</span>
										<span className="col-md-12 text-justify">
											Cost: {this.state.cardData.attacks[0].cost.join(", ")}
										</span>
									</Row>
									<Row>
										<section className="d-flex flex-column align-items-center col-md-6 mb-3 col-lg-4">
											<h4 className="text-center">Resistances:</h4>
											<span className="text-center">
												{this.state.cardData.resistances[0].type} {this.state.cardData.resistances[0].value}
											</span>
										</section>
										<section className="d-flex flex-column align-items-center col-md-6 mb-3 col-lg-4">
											<h4 className="text-center">Weaknesses:</h4>
											<span className="text-center">
												{this.state.cardData.weaknesses[0].type} {this.state.cardData.weaknesses[0].value}
											</span>
										</section>
										<section className="d-flex flex-column align-items-center col-md-6 mb-3 col-lg-4">
											<h4 className="text-center">Retreat:</h4>
											<span className="text-center">
												{this.state.cardData.retreatCost.join(", ")}
											</span>
										</section>
										<section className="d-flex flex-column align-items-center col-md-6 mb-3 col-lg-12">
											<h4 className="text-center">Card set:</h4>
											<span className="text-center">
												{this.state.cardData.set}
											</span>
										</section>
									</Row>
								</section>
							</Row>
						</article>
					</section>
				);
			}
		}
		return <Row>{details}</Row>;
	}
}

export default CardDetails;
