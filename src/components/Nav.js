import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import LoginForm from "../auth/LoginForm";


class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logo: "http://localhost:1337/uploads/thumbnail_2-23204_banner-scroll-png-scroll-clipart-transparent_81e9842716.png",
            loginButtonText: "Logga in",
            logoutButtonText: "Logga ut",
            toggleLogin: false,
            showLogin: "hide",
        }
    }

    handleOnclickLogin = (e) => {
        e.preventDefault()
        if (this.state.toggleLogin) {
            return (this.setState({ loginButtonText: "Logga in", toggleLogin: false, showLogin: "hide" }));
        } else {
            return (this.setState({ loginButtonText: "...", toggleLogin: true, showLogin: "" }));
        }
    }

    changeShow = (e) => {
        this.setState({ loginButtonText: "Logga in", toggleLogin: !e, showLogin: "hide" });
    }

    handleOnclickLogout = (e) => {
        e.preventDefault()
        this.props.changeUser(null);
        this.props.changeUserGroup(null);
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
                    {(this.props.aUserGroup === "admin") &&
                        <li>
                            <Link to="/Admin">
                                <button className={""}>Översikt</button>
                            </Link>
                        </li>
                    }
                    {(this.props.aUserGroup === "Authenticated") &&
                        <li>
                            <Link to="/CustomerOverview">
                                <button className={""}>Översikt</button>
                            </Link>
                        </li>
                    }
                    {this.props.aUser &&
                        <li>
                            <form onSubmit={this.handleOnclickLogout}>
                                <button onClick={this.handleOnclickLogout}>{this.state.logoutButtonText}</button>
                            </form>
                        </li>
                    }
                    {!this.props.aUser &&
                        <li>
                            <form onSubmit={this.handleOnclickLogin}>
                                <button className={this.state.toggleLogin ? "selected" : "deselected"} onClick={this.handleOnclickLogin}>{this.state.loginButtonText}</button>
                            </form>
                            {this.state.toggleLogin &&
                                <LoginForm changeShow={this.changeShow} aUser={this.props.aUser} changeUser={this.props.changeUser} changeUserGroup={this.props.changeUserGroup} />}
                        </li>
                    }
                </ul>
            </nav >

        )
    }
}

export default Nav;