import React, { useContext } from 'react';
import { UserContext } from '../contexts/user-context';

export default function DisplayUserInformation() {
	const userContext = useContext(UserContext);

	return (
		<div>
			<h1>User Information Component</h1>
			<p>User First Name: { userContext.state.firstName }</p>
			<p>User Last Name: { userContext.state.lastName }</p>
			<p>User Age: { userContext.state.age }</p>
		</div>
	);
}