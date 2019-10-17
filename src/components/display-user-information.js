import React, { Component } from 'react';
import { UserConsumer } from '../contexts/user-context';

export default class DisplayUserInformation extends Component {
	render() {
		return (
			<UserConsumer>
				{ userContext =>
					<div>
						<h1>User Information Component</h1>
						<p>{ userContext.firstName }</p>
						<p>{ userContext.lastName }</p>
						<p>{ userContext.age }</p>
					</div>
				}
			</UserConsumer>
		);
	}
}