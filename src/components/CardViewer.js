import React from "react";
import { Row } from "reactstrap";

class CardViewer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Row>
				{this.props.cards.map(card => {
					return (
						<section className="col-sm-12 col-md-4" key={card.id}>
							<article className="card spacing">
								<section className="d-flex justify-content-center ">
									<a href="/">
										<img
											src={card.imageUrl}
											alt={card.id}
											className="card-image"
										/>
									</a>
								</section>
								<section className="d-flex flex-column align-items-center">
									<a href="/" className="card-name">
										{card.name} ({card.id})
									</a>
								</section>
							</article>
						</section>
					);
				})}
			</Row>
		);
	}
}

export default CardViewer;
