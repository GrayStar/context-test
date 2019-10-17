import React, { useContext } from 'react';
import { UserContext, USER_ACTIONS } from '../contexts/user-context';

export default function UpdateUserInformation() {
	const userContext = useContext(UserContext);

	const handleSetFirstNameButtonClick = () => {
		userContext.dispatch({
			type: USER_ACTIONS.SET_FIRST_NAME,
			payload: { firstName: 'Anthony' },
		});
	};

	const handleSetLastNameButtonClick = () => {
		userContext.dispatch({
			type: USER_ACTIONS.SET_LAST_NAME,
			payload: { lastName: 'Smith' },
		});
	};

	const handleSetAgeButtonClick = () => {
		userContext.dispatch({
			type: USER_ACTIONS.SET_AGE,
			payload: { age: 45 },
		});
	};

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