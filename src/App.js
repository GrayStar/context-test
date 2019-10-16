import React from 'react';
import DisplayUserInformation from './components/display-user-information';
import UpdateUserInformation from './components/update-user-information';

import { UserProvider } from './contexts/user-context';

function App() {
    return (
        <UserProvider>
            <div>
                <h1>App</h1>

                <DisplayUserInformation />
                <UpdateUserInformation />
            </div>
        </UserProvider>
    );
}

export default App;
