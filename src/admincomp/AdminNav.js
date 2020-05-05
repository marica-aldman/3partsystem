import React, { Component } from "react";
import { Link } from "react-router-dom";


class AdminNav extends Component {

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
                            <button className={""}>Movies</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookings">
                            <button className={""}>Dates</button>
                        </Link>
                    </li>
                </ul>
            </nav>

        )
    }
}

export default AdminNav;