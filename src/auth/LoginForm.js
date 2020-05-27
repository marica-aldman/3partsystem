import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import firebase from "../components/FirebaseConfig";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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


    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/profile',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ]
    };

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
            .signInWithEmailAndPassword(email, password).catch(error => {
                console.log(error);
                var failedLoginError = "Lösenordet eller användarnamnet är inkorrekt.";
                this.setState({ failedLogin: true, error: failedLoginError });
            }).then(res => {
                this.props.changeShow(true);
                this.props.changeUser(res.user.email);
                this.props.changeUserGroup("Customer");
                this.props.changeShow(true);
                this.props.history.push("/profile");
            })
    }

    onSubmitRegister(e) {
        e.preventDefault();
        const FirstName = e.target.elements.firstname.value;
        const LastName = e.target.elements.lastname.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        var disName = FirstName + " " + LastName;
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                res.user.updateProfile({ displayName: disName })
                const docRef = firebase.firestore().collection('userProfile').doc(res.user.$.W);
                docRef.set({
                    firstName: FirstName,
                    lastName: LastName,
                    picture: false,
                });
                this.props.changeUser(res.user.email);
                this.props.changeUserGroup("Customer");
                this.props.changeShow(true);
                this.props.history.push("/profile");
            }).catch((error) => {
                console.log(error);
                var failedRegistrationError = "Registrering misslyckades.";
                this.setState({ failedRegistration: true, error: failedRegistrationError });
            })
    }

    render() {
        return (
            <div className={"navbar-loginform"}>
                {this.state.login &&
                    <div className={"navbar-login"}>
                        <form onSubmit={this.onSubmitLogin.bind(this)}>
                            {this.state.failedLogin && <div>
                                {this.state.error}
                            </div>
                            }
                            <div>
                                Logga in:
                            </div>
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
                                <button className={"formButton"} type={"submit"}>Logga in</button>
                            </div>
                        </form>
                        <div className={"gmailFacebook"}>
                            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                        </div>
                        <div>
                            Har du inget ett konto?
                        </div>
                        <div>
                            <button type={"submit"} className={"formButton"} name="changeregister" onClick={this.handleRegisterState.bind(this)}>Registera dig</button>
                        </div>
                    </div>
                }
                {
                    !this.state.login &&
                    <div className={"navbar-register"}>
                        <form onSubmit={this.onSubmitRegister.bind(this)}>
                            <div>
                                Registrera dig:
                        </div>
                            {this.state.failedRegistration && <div>
                                {this.state.error}
                            </div>
                            }
                            <div>Förnamn:</div>
                            <div>
                                <input type={"text"} name="firstname"></input>
                            </div>
                            <div>Efternamn:</div>
                            <div>
                                <input type={"text"} name="lastname"></input>
                            </div>
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
                                <button className={"formButton"} type={"submit"}>Registera</button>
                            </div>
                        </form>
                        <div>
                            Har du redan ett konto?
                        </div>
                        <div>
                            <button type={"submit"} className={"formButton"} onClick={this.handleLoginState.bind(this)}>Logga in istället</button>
                        </div>
                    </div>
                }

            </div >
        )
    }
}

export default withRouter(LoginForm);