import React, { Component } from 'react';
import AdminProfile from '../auth/AdminProfile';
import AdminLogin from '../auth/AdminLogin';

class AdminView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.aUser ?
                        <AdminProfile user={this.props.aUser} />
                        :
                        <AdminLogin
                            aUser={this.props.aUser}
                            changeUser={this.props.changeUser}
                            changeUserName={this.props.changeUserName}
                            changeUserAuth={this.props.changeUserAuth} changeUserGroup={this.props.changeUserGroup} />}
            </div>
        )
    }
}

export default AdminView;