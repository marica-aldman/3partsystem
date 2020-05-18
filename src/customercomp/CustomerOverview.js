import React, { Component } from 'react';
import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile";

class CustomerOverview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null || localStorage.getItem('u'),
            displayName: "",
        }
    }

    userCredentrial = (email) => {
        this.setState({ user: email });
        localStorage.setItem('u', this.state.user);
    }

    render() {
        console.log(this.state.user)
        const loggedIn = this.state.user || localStorage.getItem('u');
        console.log(this.state.user)
        return (
            <div>
                {
                    !loggedIn ? <UserLogin userCredentrial={this.userCredentrial} showDisplayName={this.showDisplayName} /> : <UserProfile userData={this.state.user} />
                }
            </div>
        )
    }
}

export default CustomerOverview;