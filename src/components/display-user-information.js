import React, { Component } from 'react';

export default class DisplayUserInformation extends Component {
	render() {
		return (
			<div>
				<h1>User Information Component</h1>
				<p>{ this.props.user.firstName }</p>
				<p>{ this.props.user.lastName }</p>
				<p>{ this.props.user.age }</p>
			</div>
		);
	}
}