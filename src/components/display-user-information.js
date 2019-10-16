import React, { useContext } from 'react';
import { UserContext } from '../contexts/user-context';

export default function DisplayUserInformation() {
	const user = useContext(UserContext);

	return (
		<div>
			<h1>User Information Component</h1>
			<p>{ user.state.firstName }</p>
			<p>{ user.state.lastName }</p>
			<p>{ user.state.age }</p>
		</div>
	);
}