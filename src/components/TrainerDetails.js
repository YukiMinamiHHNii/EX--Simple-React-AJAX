import React from "react";
import { Row } from "reactstrap";

class TrainerDetails extends React.Component {
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
						<section className="col-md-6 pl-md-0 card-details d-flex flex-column justify-content-center">
							<div>
								<h2 className="col-sm-12 text-center">
									{this.props.cardData.name}
								</h2>
								<h3 className="col-sm-12 text-center">
									{`${this.props.cardData.supertype} - ${
										this.props.cardData.subtype
									}`}
								</h3>
								<h3 className="col-sm-12 text-center card-details">Ruling:</h3>
								{this.props.cardData.hasOwnProperty("text") ? (
									<p className="col-sm-12 text-justify">
										{this.props.cardData.text.join("\n")}
									</p>
								) : (
									<p className="col-sm-12 text-center">{"None"}</p>
								)}

								<h3 className="col-sm-12 text-center">Card set:</h3>
								<p className="col-sm-12 text-center">
									{this.props.cardData.set}
								</p>
							</div>
						</section>
					</Row>
				</article>
			</section>
		);
	}
}

export default TrainerDetails;
