import React from "react";
import { Row, Form, FormGroup, Label, Input, Col } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

class CardSearch extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.state = {
			name: ""
		};
	}
	onChange(e) {
		let target = e.target.name,
			value = e.target.value;
		this.setState(prevState => {
			return { [target]: value };
		});
	}
	onSearch(e) {
		return axios
			.get(process.env.REACT_APP_API_ENDPOINT, {
				params: this.state
			})
			.then(response => {
				return this.props.search(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return (
			<Row>
				<Form inline className="col-sm-12">
					<FormGroup className="col-sm-12">
						<Label for="name" className="col-sm-12 col-md-3">
							Search card:
						</Label>
						<Input
							type="text"
							name="name"
							placeholder="Card name"
							className="col-sm-12 col-md-7"
							onChange={this.onChange}
						/>
						<Col
							sm="12"
							md="2"
							className="d-flex flex-row justify-content-end justify-content-md-center"
						>
							<Link to="/" onClick={this.onSearch}>
								<Input type="submit" value="Submit" />
							</Link>
						</Col>
					</FormGroup>
				</Form>
			</Row>
		);
	}
}

export default CardSearch;
