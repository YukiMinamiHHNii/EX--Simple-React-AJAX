import React from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import axios from "axios";

class CardSearch extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
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
	onSubmit(e) {
		e.preventDefault();
		axios
			.get(process.env.REACT_APP_API_ENDPOINT, {
				params: this.state
			})
			.then(response => {
				console.log(response.data);
			})
			.catch(err => {
				console.log(err);
			});
	}
	render() {
		return (
			<Form inline className="col-sm-12" onSubmit={this.onSubmit}>
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
						<Input type="submit" value="Submit" />
					</Col>
				</FormGroup>
			</Form>
		);
	}
}

export default CardSearch;
