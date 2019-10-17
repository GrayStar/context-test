import React, { Component } from 'react';
import DisplayUserInformation from './components/display-user-information';
import UpdateUserInformation from './components/update-user-information';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                age: 32,
            },
        };

        this.handleUserFirstNameChange = this.handleUserFirstNameChange.bind(this);
        this.handleUserLastNameChange = this.handleUserLastNameChange.bind(this);
        this.handleUserAgeChange = this.handleUserAgeChange.bind(this);
    }

    handleUserFirstNameChange(value) {
        const userClone =  Object.assign({}, this.state.user);
        userClone.firstName = value;

        this.setState({ user: userClone });
    }

    handleUserLastNameChange(value) {
        const userClone =  Object.assign({}, this.state.user);
        userClone.lastName = value;

        this.setState({ user: userClone });
    }

    handleUserAgeChange(value) {
        const userClone =  Object.assign({}, this.state.user);
        userClone.age = value;

        this.setState({ user: userClone });
    }

    render() {
        return (
            <div>
                <h1>App</h1>

                <DisplayUserInformation user={ this.state.user } />
                <UpdateUserInformation
                    onUserFirstNameChange={ this.handleUserFirstNameChange }
                    onUserLastNameChange={ this.handleUserLastNameChange }
                    onUserAgeChange={ this.handleUserAgeChange } />
            </div>
        );
    }
}
