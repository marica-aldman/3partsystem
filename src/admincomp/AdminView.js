import React, { Component } from 'react';
import AdminProfile from '../auth/AdminProfile';

class AdminView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <AdminProfile user={this.props.aUser} />

            </div>
        )
    }
}

export default AdminView;