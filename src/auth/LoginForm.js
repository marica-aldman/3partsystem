import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import firebase from "../components/FirebaseConfig";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: true,
            failedLogin: false,
            failedRegistration: false,
            error: "",
        }
    }

    handleRegisterState(e) {
        e.preventDefault()
        this.setState({ login: false })
    }

    handleLoginState(e) {
        e.preventDefault()
        this.setState({ login: true })
    }

    onSubmitLogin(e) {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        firebase.auth()
            .signInWithEmailAndPassword(email, password).then(res => {
                this.setState({ failedLogin: false });
                this.props.changeUser(res.user.email);
                this.props.changeUserName(res.user.displayName);
                this.props.changeUserGroup('Customer');
                this.props.changeShow(true);
                this.props.history.push("/CustomerOverview");
            }).catch(error => {
                console.log(error);
                var failedLoginError = "Lösenordet eller användarnamnet är inkorrekt.";
                this.setState({ failedLogin: true, error: failedLoginError });
            })
    }

    onSubmitRegister(e) {
        e.preventDefault();
        const username = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                res.user.updateProfile({ displayName: username });
                this.props.changeUser(res.user.email);
                this.props.changeUserName(res.user.displayName);
                this.props.changeUserGroup("Customer");
                this.props.changeShow(true);
                this.props.history.push("/CustomerOverview");
            }).catch((error) => {
                console.log(error);
                var failedRegistrationError = "Registrering misslyckades.";
                this.setState({ failedRegistration: true, error: failedRegistrationError });
            })
    }

    render() {
        return (
            <div>
                {this.state.login &&
                    <div>
                        <form onSubmit={this.onSubmitLogin.bind(this)}>
                            {this.state.failedLogin && <div>
                                {this.state.error}
                            </div>
                            }
                            <div>
                                Email:
                            </div>
                            <div>
                                {this.props.aUser && <input type={"text"} placeholder={"username"} name={"email"} ></input>}
                                {!this.props.aUser && <input type={"text"} placeholder={"username"} name={"email"} ></input>}
                            </div>
                            <div>
                                Lösenord:
                            </div>
                            <div>
                                {this.props.aUser && <input type={"password"} placeholder={"password"} ></input>}
                                {!this.props.aUser && <input type={"password"} placeholder={"password"} name={"password"} ></input>}
                            </div>
                            <div>
                                <button type={"submit"}>Logga in</button>
                            </div>
                        </form>
                        <div>
                            Har du inget ett konto?
                        </div>
                        <div>
                            <button type={"submit"} name="changeregister" onClick={this.handleRegisterState.bind(this)}>Registera dig</button>
                        </div>
                    </div>
                }
                {
                    !this.state.login &&
                    <div>
                        <form onSubmit={this.onSubmitRegister.bind(this)}>
                            <div>
                                Registrera dig:
                        </div>
                            {this.state.failedRegistration && <div>
                                {this.state.error}
                            </div>
                            }
                            <div>
                                Email:
                        </div>
                            <div>
                                {this.props.aUser && <input type={"email"} placeholder={"username"} name={"email"}></input>}
                                {!this.props.aUser && <input type={"email"} placeholder={"username"} name={"email"} ></input>}
                            </div>
                            <div>
                                Lösenord:
                            </div>
                            <div>
                                {this.props.aUser && <input type={"password"} placeholder={"password"} name={"password"} ></input>}
                                {!this.props.aUser && <input type={"password"} placeholder={"password"} name={"password"} ></input>}
                            </div>
                            <div>
                                <button type={"submit"}>Registera</button>
                            </div>
                        </form>
                        <div>
                            Har du redan ett konto?
                        </div>
                        <div>
                            <button type={"submit"} onClick={this.handleLoginState.bind(this)}>Logga in istället</button>
                        </div>
                    </div>
                }

            </div >
        )
    }
}

export default withRouter(LoginForm);