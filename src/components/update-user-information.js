import React, { useContext } from 'react';
import { UserContext } from '../contexts/user-context';

export default function UpdateUserInformation() {
	const user = useContext(UserContext);

	const handleSetFirstNameButtonClick = () => {
		user.setFirstName('Anthony');
	}

	const handleSetLastNameButtonClick = () => {
		user.setLastName('Smith');
	}

	const handleSetAgeButtonClick = () => {
		user.setAge(45);
	}

	return (
		<div>
			<h1>Update User Information Component</h1>

			<button onClick={ handleSetFirstNameButtonClick }>
				Set First Name to Anthony
			</button>

			<button onClick={ handleSetLastNameButtonClick }>
				Set Last Name to Smith
			</button>

			<button onClick={ handleSetAgeButtonClick }>
				Set Last Name to Smith
			</button>
		</div>
	);
}