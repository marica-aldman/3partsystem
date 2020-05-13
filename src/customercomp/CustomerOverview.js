import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class CustomerOverview extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        if (this.props.aUserGroup != 'Authenticated') {
            return (<Redirect to="/" />)
        }

        return (
            <div>
                Test
            </div>
        )
    }
}

export default CustomerOverview;