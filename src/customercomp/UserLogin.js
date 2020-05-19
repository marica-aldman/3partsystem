import React, { Component } from 'react';
import firebase from "../components/FirebaseConfig";

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
                        <div>Har du inget konto? <button onClick={this.onClickRegister.bind(this)}>Registrera dig istället</button></div>
                    </div>
                }
                {
                    !this.state.condition && <div>
                        <h2>Registrera dig</h2>
                        <form onSubmit={this.onSubmitRegister.bind(this)}>
                            <div>Namn:</div>
                            <input type="text" name="name"></input><div>Emailadress:</div>
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