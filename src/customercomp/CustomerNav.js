import React, { Component } from "react";
import { Link } from "react-router-dom";


class CustomerNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (

            <nav className={"second-menu"} >
                <ul>
                    <li>
                        <Link to="/">
                            <button className={""}>Program</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookings">
                            <button className={""}>Bokningar</button>
                        </Link>
                    </li>
                </ul>
            </nav>

        )
    }
}

export default CustomerNav;