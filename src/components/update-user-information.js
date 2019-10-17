import React, { Component } from 'react';
import { UserConsumer } from '../contexts/user-context';

export default class UpdateUserInformation extends Component {
	constructor(props) {
		super(props);

		this.handleSetFirstNameButtonClick = this.handleSetFirstNameButtonClick.bind(this);
		this.handleSetLastNameButtonClick = this.handleSetLastNameButtonClick.bind(this);
		this.handleSetAgeButtonClick = this.handleSetAgeButtonClick.bind(this);
	}

	handleSetFirstNameButtonClick(userContext) {
		userContext.setFirstName('Anthony');
	}

	handleSetLastNameButtonClick(userContext) {
		userContext.setLastName('Smith');
	}

	handleSetAgeButtonClick(userContext) {
		userContext.setAge(45);
	}

	render() {
		return (
			<UserConsumer>
				{ userContext =>
					<div>
						<h1>Update User Information Component</h1>

						<button onClick={ () => this.handleSetFirstNameButtonClick(userContext) }>
							Set First Name to Anthony
						</button>

						<button onClick={ () => this.handleSetLastNameButtonClick(userContext) }>
							Set Last Name to Smith
						</button>

						<button onClick={ () => this.handleSetAgeButtonClick(userContext) }>
							Set Last Name to Smith
						</button>
					</div>
				}
			</UserConsumer>
		);
	}
}