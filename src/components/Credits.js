import React from "react";

class Credits extends React.Component {
	render() {
		return (
			<section className="col-sm-12">
				<article className="card spacing text-center">
					<h2>EX--Simple-React-AJAX</h2>
					<p>
						(Not so) simple usage example of Axios on a React application
						(includes React Router and Reactstrap too!).
					</p>
					<p>
						Credits to <a href="https://andrewbackes.com/">Andrew Backes</a> for
						the Pokémon TCG API. All images and content belong to their
						respective owners.
					</p>
					<p>Site created with educational purposes only.</p>
				</article>
			</section>
		);
	}
}

export default Credits;
