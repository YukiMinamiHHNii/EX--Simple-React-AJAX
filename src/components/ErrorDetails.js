import React from "react";

class ErrorDetails extends React.Component {
	render() {
		return (
			<section className="col-sm-12">
				<article className="card spacing">
					<section className="d-flex justify-content-center text-center">
						<h2>{this.props.error}</h2>
					</section>
				</article>
			</section>
		);
	}
}

export default ErrorDetails;