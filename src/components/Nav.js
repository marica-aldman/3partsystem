import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";


class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logo: "http://localhost:1337/uploads/thumbnail_2-23204_banner-scroll-png-scroll-clipart-transparent_81e9842716.png",
            loginButtonText: "Logga in",
            showLogin: false,
        }
    }

    handleOnclickLogin = () => {
        if (this.state.showLogin) {
            return (this.setState({ loginButtonText: "Logga in", showLogin: false }));
        } else {
            return (this.setState({ loginButtonText: "...", showLogin: true }));
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (

            <nav className={"top-menu"} >
                <ul>
                    <li>
                        <Link to="/">
                            <img src={this.state.logo} className={"nav-logo"} alt={"Logo"} />
                        </Link>
                    </li>
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
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            <button className={this.state.showLogin ? "selected" : "deselected"} onClick={this.handleOnclickLogin}>{this.state.loginButtonText}</button>
                        </form>
                        <LoginForm showClass={this.state.showLogin} />
                    </li>
                </ul>
            </nav >

        )
    }
}

export default Nav;