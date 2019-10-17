import React, { useContext } from 'react';
import { UserContext } from '../contexts/user-context';
import useApiRequest from '../hooks/use-api-request';

export default function DisplayUserInformation() {
    const userContext = useContext(UserContext);

    const [{ status, response }, makeRequest] = useApiRequest(
        `https://jsonplaceholder.typicode.com/users/1`,
        { method: 'get' },
    );

    const handleApiRequestButtonClick = () => {
        makeRequest();
    }

    const getResponse = () => {
        if (response && response.name) {
            return response.name;
        }

        return null;
    }

    return (
        <div>
            <p>api status: { status }</p>
            <p>api response: { getResponse() }</p>
            <button onClick={ handleApiRequestButtonClick }>make api request</button>

            <h1>User Information Component</h1>
            <p>User First Name: { userContext.state.firstName }</p>
            <p>User Last Name: { userContext.state.lastName }</p>
            <p>User Age: { userContext.state.age }</p>
        </div>
    );
}