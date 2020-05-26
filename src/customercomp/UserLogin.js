import React, { Component } from 'react';
import firebase from "../components/FirebaseConfig";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class UserLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            condition: true,
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

    onClickRegister() {
        this.setState({ condition: false })
    }

    onClickLogin() {
        this.setState({ condition: true })
    }

    onSubmitLogin(e) {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        firebase.auth()
            .signInWithEmailAndPassword(email, password).then(res => {
                this.props.changeUser(res.user.email);
                this.props.changeUserName(res.user.displayName);
                this.props.changeUserGroup("Customer");
                this.setState({ failedLogin: false });
            }).catch(error => {
                console.log(error);
                var failedLoginError = "Lösenordet eller användarnamnet är inkorrekt.";
                this.setState({ failedLogin: true, error: failedLoginError });
            })
    }

    onSubmitRegister(e) {
        e.preventDefault();
        const FirstName = e.target.elements.firstname.value;
        const LastName = e.target.elements.lastname.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const username = FirstName + " " + LastName;

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                res.user.updateProfile({ displayName: username });
                const docRef = firebase.firestore().collection('userProfile').doc(res.user.$.W);
                docRef.set({
                    firstName: FirstName,
                    lastName: LastName,
                });
                this.props.changeUser(res.user.email);
                this.props.changeUserName(username);
                this.props.changeUserGroup("Customer");
                this.setState({ failedLogin: false });
            }).catch((error) => {
                console.log(error);
                var failedRegistrationError = "Registrering misslyckades.";
                this.setState({ failedRegistration: true, error: failedRegistrationError });
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.condition && <div>
                        <h2>Logga in</h2>
                        <form onSubmit={this.onSubmitLogin.bind(this)}>
                            <div>Emailadress:</div>
                            <input type="email" name="email"></input>
                            <div>Lösenord:</div>
                            <input type="password" name="password"></input>
                            <button type="submit">Logga in</button>
                        </form>
                        <div>
                            <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                        </div>
                        <div>Har du inget konto? <button onClick={this.onClickRegister.bind(this)}>Registrera dig istället</button></div>
                    </div>
                }
                {
                    !this.state.condition && <div>
                        <h2>Registrera dig</h2>
                        <form onSubmit={this.onSubmitRegister.bind(this)}>
                            <div>Förnamn:</div>
                            <input type="text" name="firstname"></input>
                            <div>Efternamn:</div>
                            <input type="text" name="lastname"></input>
                            <div>Emailadress:</div>
                            <input type="email" name="email"></input>
                            <div>Lösenord:</div>
                            <input type="password" name="password"></input>
                            <button type="submit">Registrera</button>
                        </form>
                        <div>Har du konto? <button onClick={this.onClickLogin.bind(this)} > Logga in istället</button></div>
                    </div>
                }
            </div>
        )
    }
}

export default UserLogin;