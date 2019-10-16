import React, { useContext } from 'react';
import { UserContext } from '../contexts/user-context';

export default function DisplayUserInformation() {
	const user = useContext(UserContext);

	return (
		<div>
			<h1>User Information Component</h1>
			<p>{ user.firstName }</p>
			<p>{ user.lastName }</p>
			<p>{ user.age }</p>
		</div>
	);
}