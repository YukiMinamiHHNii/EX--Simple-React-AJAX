import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<Navbar className="highlight" expand="md">
				<div className="container">
					<NavbarBrand href="/">React AJAX</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/">Option 1</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/">Option 2</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
			</Navbar>
		);
	}
}

export default Navigation;
