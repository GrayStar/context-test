import React, { useEffect } from 'react';
import DisplayUserInformation from './components/display-user-information';
import UpdateUserInformation from './components/update-user-information';

import useFetch from './hooks/use-fetch';
import { UserProvider } from './contexts/user-context';

function App() {
    const [{ status, response }, makeRequest] = useFetch(
        'https://jsonplaceholder.typicode.com/users/1',
        { method: 'get' },
    );

    const handleRequestClick = async () => {
        await makeRequest();
    };

    useEffect(() => {
        if (status === 'SUCCESS') {
            console.log(response);
        }
    }, [status, response]);

    return (
        <UserProvider>
            <div>
                <h1>App</h1>

                <p>api status: { status }</p>
                <p>api response: { `${response}` }</p>
                <button onClick={ handleRequestClick }>Make Request</button>

                <DisplayUserInformation />
                <UpdateUserInformation />
            </div>
        </UserProvider>
    );
}

export default App;
