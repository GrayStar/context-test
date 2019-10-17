import React, { Component } from 'react';

export default class UpdateUserInformation extends Component {
    constructor(props) {
        super(props);

        this.handleSetFirstNameButtonClick = this.handleSetFirstNameButtonClick.bind(this);
        this.handleSetLastNameButtonClick = this.handleSetLastNameButtonClick.bind(this);
        this.handleSetAgeButtonClick = this.handleSetAgeButtonClick.bind(this);
    }

    handleSetFirstNameButtonClick() {
        if (this.props.onUserFirstNameChange) {
            this.props.onUserFirstNameChange('Anthony');
        }
    }

    handleSetLastNameButtonClick() {
        if (this.props.onUserLastNameChange) {
            this.props.onUserLastNameChange('Smith');
        }
    }

    handleSetAgeButtonClick() {
        if (this.props.onUserAgeChange) {
            this.props.onUserAgeChange(45);
        }
    }

    render() {
        return (
            <div>
                <h1>Update User Information Component</h1>

                <button onClick={ this.handleSetFirstNameButtonClick }>
                    Set First Name to Anthony
                </button>

                <button onClick={ this.handleSetLastNameButtonClick }>
                    Set Last Name to Smith
                </button>

                <button onClick={ this.handleSetAgeButtonClick}>
                    Set Last Name to Smith
                </button>
            </div>
        );
    }
}
