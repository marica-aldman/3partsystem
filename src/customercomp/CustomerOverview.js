import React, { Component } from 'react';
import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile";

class CustomerOverview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: this.props.aUser || localStorage.getItem('u'),
            user: null || localStorage.getItem('u'),
            displayName: "",
        }
    }

    userCredentrial = (email) => {
        this.setState({ user: email });
        localStorage.setItem('u', this.state.user);
    }

    render() {
        return (
            <div>
                {
                    !this.state.loggedIn ? <UserLogin changeUser={this.props.changeUser} changeUserName={this.props.changeUserName} changeUserAuth={this.props.changeUserAuth} changeUserGroup={this.props.changeUserGroup} aUser={this.props.aUser} aUsername={this.state.userName} /> : <UserProfile aUsername={this.state.userName} userData={this.state.user} />
                }
            </div>
        )
    }
}

export default CustomerOverview;