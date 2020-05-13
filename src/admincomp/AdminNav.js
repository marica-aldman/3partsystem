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
                        <Link to="/mod/movies">
                            <button className={""}>Filmer</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mod/salons">
                            <button className={""}>Salonger</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mod/shedules">
                            <button className={""}>Scheman</button>
                        </Link>
                    </li>
                </ul>
            </nav>

        )
    }
}

export default AdminNav;