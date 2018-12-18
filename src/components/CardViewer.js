import React from "react";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";

let viewer;

class CardViewer extends React.Component {
	render() {
		if (this.props.init) {
			viewer = (
				<section className="col-sm-12">
					<article className="card spacing">
						<section className="d-flex justify-content-center text-center">
							<h2>Enter a card name to search</h2>
						</section>
					</article>
				</section>
			);
		} else {
			if (this.props.cards.length > 0) {
				viewer = this.props.cards.map(card => {
					return (
						<section className="col-xs-12 col-sm-6 col-md-4" key={card.id}>
							<article className="card spacing">
								<section className="d-flex justify-content-center">
									<Link to={{ pathname: `/${card.id}`, state: card }}>
										<img
											src={card.imageUrl}
											alt={card.id}
											className="card-image"
										/>
									</Link>
								</section>
								<section className="d-flex flex-column align-items-center">
									<Link
										to={{ pathname: `/${card.id}`, state: card }}
										className="card-name"
									>
										{card.name} ({card.id})
									</Link>
								</section>
							</article>
						</section>
					);
				});
			} else {
				viewer = (
					<section className="col-sm-12">
						<article className="card spacing">
							<section className="d-flex justify-content-center text-center">
								<h2>No cards found for given criteria</h2>
							</section>
						</article>
					</section>
				);
			}
		}

		return <Row>{viewer}</Row>;
	}
}

export default CardViewer;
