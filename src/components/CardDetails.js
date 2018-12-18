import React from "react";
import axios from "axios";

let details;

class CardDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cardData: {},
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
			details = (
				<section className="col-sm-12">
					<article className="card spacing">
						<section className="d-flex justify-content-center text-center">
							<h2>{this.state.cardData.id}</h2>
						</section>
					</article>
				</section>
			);
		}
		return <div>{details}</div>;
	}
}

export default CardDetails;
