import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import firebase from "../components/FirebaseConfig";


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
        this.props.changeUserAuth(null);
        this.props.changeUserGroup(null);
        firebase.auth().signOut();
        localStorage.clear();
        window.location.reload(false);
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
                            <button className={"formButton"}>Program</button>
                        </Link>
                    </li>
                    {(this.props.aUserGroup === "admin") &&
                        <li>
                            <Link to="/Admin">
                                <button className={"formButton"}>Översikt</button>
                            </Link>
                        </li>
                    }
                    {(this.props.aUserGroup === "Authenticated") &&
                        <li>
                            <Link to="/CustomerOverview">
                                <button className={"formButton"}>Översikt</button>
                            </Link>
                        </li>
                    }
                    {(this.props.aUser || localStorage.getItem('u') || localStorage.getItem("firebaseui::rememberedAccounts")) &&
                        <li className={"login"}>
                            <form onSubmit={this.handleOnclickLogout}>
                                <button className={"formButton"} onClick={this.handleOnclickLogout}>{this.state.logoutButtonText}</button>
                            </form>
                        </li>
                    }
                    {(!this.props.aUser && !localStorage.getItem("firebaseui::rememberedAccounts")) &&
                        <li>
                            <form onSubmit={this.handleOnclickLogin}>
                                <button className={this.state.toggleLogin ? "selected, formButton" : "deselected, formButton"} onClick={this.handleOnclickLogin}>{this.state.loginButtonText}</button>
                            </form>
                            {this.state.toggleLogin &&
                                <LoginForm changeShow={this.changeShow} aUser={this.props.aUser} changeUser={this.props.changeUser} changeUserName={this.props.changeUserName} changeUserAuth={this.props.changeUserAuth} changeUserGroup={this.props.changeUserGroup} />}
                        </li>
                    }
                </ul>
            </nav >

        )
    }
}

export default Nav;