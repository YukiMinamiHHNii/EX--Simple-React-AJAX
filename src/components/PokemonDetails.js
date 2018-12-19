import React from "react";
import { Row } from "reactstrap";

class PokemonDetails extends React.Component {
	render() {
		return (
			<section className="col-sm-12">
				<article className="card spacing">
					<Row>
						<section className="col-md-6 d-flex align-items-center justify-content-center">
							<img
								src={this.props.cardData.imageUrlHiRes}
								alt={this.props.cardData.id}
								className="card-image"
							/>
						</section>
						<section className="col-md-6 pl-md-0 card-details">
							<h2 className="col-sm-12 text-center">
								{this.props.cardData.name}
							</h2>
							<h3 className="col-sm-12 text-center">
								{`${this.props.cardData.supertype} - ${
									this.props.cardData.subtype
								}`}
							</h3>
							<Row>
								<h3 className="col-md-6 text-center">
									HP: {this.props.cardData.hp}
								</h3>
								<h3 className="col-md-6 text-center">
									Type: {this.props.cardData.types.join("/")}
								</h3>
							</Row>
							{this.props.cardData.hasOwnProperty("ability") && (
								<Row>
									<h3 className="col-md-12 text-center">Ability:</h3>
									<h3 className="col-md-12 text-center">
										{this.props.cardData.ability.name}
									</h3>
									<p className="col-md-12 text-justify">
										{this.props.cardData.ability.text}
									</p>
								</Row>
							)}
							<Row className="mb-3">
								<h3 className="col-md-12 text-center">Attacks:</h3>
								{this.props.cardData.hasOwnProperty("attacks")
									? this.props.cardData.attacks.map(item => {
											return (
												<section className="col-md-12" key={item.name}>
													<h3 className="col-md-12 text-center">
														{item.damage
															? `${item.name} - ${item.damage}`
															: `${item.name}`}
													</h3>
													<p className="text-justify">{item.text}</p>
													<p className="text-justify">
														{`Cost: ${item.cost.join(", ")}`}
													</p>
												</section>
											);
									  })
									: "None"}
							</Row>
							<Row>
								<section className="d-flex flex-column align-items-center col-md-6 mb-3 col-lg-4">
									<h4 className="text-center">Weaknesses:</h4>
									<span className="text-center">
										{this.props.cardData.hasOwnProperty("weaknesses")
											? this.props.cardData.weaknesses.map(item => {
													return `${item.type} ${item.value}`;
											  })
											: "None"}
									</span>
								</section>
								<section className="d-flex flex-column align-items-center col-md-6 mb-3 col-lg-4">
									<h4 className="text-center">Resistances:</h4>
									<span className="text-center">
										{this.props.cardData.hasOwnProperty("resistances")
											? this.props.cardData.resistances.map(item => {
													return `${item.type} ${item.value}`;
											  })
											: "None"}
									</span>
								</section>
								<section className="d-flex flex-column align-items-center col-md-6 mb-3 col-lg-4">
									<h4 className="text-center">Retreat:</h4>
									<span className="text-center">
										{this.props.cardData.hasOwnProperty("retreatCost")
											? this.props.cardData.retreatCost.join(", ")
											: "None"}
									</span>
								</section>
								<section className="d-flex flex-column align-items-center col-md-6 mb-3 col-lg-12">
									<h4 className="text-center">Card set:</h4>
									<span className="text-center">{this.props.cardData.set}</span>
								</section>
							</Row>
						</section>
					</Row>
				</article>
			</section>
		);
	}
}

export default PokemonDetails;
