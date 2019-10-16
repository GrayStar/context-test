import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = (props) => {
	const [firstName, setFirstName] = useState('John');
	const [lastName, setLastName] = useState('Doe');
	const [age, setAge] = useState(32);

	const value = {
		firstName,
		setFirstName,
		lastName,
		setLastName,
		age,
		setAge,
	};

	return (
		<UserContext.Provider value={ value }>
			{ props.children }
		</UserContext.Provider>
	);
}

const UserConsumer = UserContext.Consumer;

export {
	UserContext,
	UserProvider,
	UserConsumer,
};