import React, { Component } from 'react';
import AdminProfile from '../auth/AdminProfile';
import { Redirect } from "react-router-dom";

class AdminView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        if (this.props.aUserGroup != "admin") {
            return (<Redirect to="/" />)
        }
        return (
            <div>
                <AdminProfile user={this.props.aUser} />
            </div>
        )
    }
}

export default AdminView;