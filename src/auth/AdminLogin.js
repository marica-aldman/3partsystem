import React, { Component } from 'react';
import axios from 'axios';

class AdminLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: true,
            username: "",
            email: "",
            password: "",
            failedLogin: false,
            failedRegistration: false,
            error: "",
        }
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value })
    }

    handleChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    handleRegisterState(e) {
        e.preventDefault()
        this.setState({ login: false })
    }

    handleLoginState(e) {
        e.preventDefault()
        this.setState({ login: true })
    }

    handleSubmitLogin(e) {
        e.preventDefault()
        console.log("here")
        axios
            .post('http://localhost:1337/auth/local', {
                identifier: this.state.username,
                password: this.state.password,
            })
            .then(res => {
                console.log("here2")
                this.setState({ failedLogin: false });
                this.props.changeUserAuth(res.data.jwt);
                this.props.changeUser(res.data.user.id);
                this.props.changeUserName(res.data.user.username);
                this.props.changeUserGroup(res.data.user.role.name);
                this.props.changeShow(true);
            })
            .catch(error => {
                console.log("here3")
                console.log(error);
                var failedLoginError = "Lösenordet eller användarnamnet är inkorrekt.";
                this.setState({ failedLogin: true, error: failedLoginError });
            })
    }


    handleSubmitRegister(e) {
        e.preventDefault()

        axios
            .post('http://localhost:1337/auth/local/register', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            })
            .then(res => {
                this.setState({ failedRegistration: false });
                this.props.changeUserAuth(res.data.jwt);
                this.props.changeUser(res.data.user.id);
                this.props.changeUserName(res.data.user.username);
                this.props.changeShow(true);
            })
            .catch(error => {
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
                        <form onSubmit={this.handleSubmitLogin.bind(this)}>
                            {this.state.failedLogin && <div>
                                {this.state.error}
                            </div>
                            }
                            <div>
                                Användarnamn:
                            </div>
                            <div>
                                {this.props.aUser && <input type={"text"} placeholder={"username"} onChange={this.handleChangeUsername.bind(this)}></input>}
                                {!this.props.aUser && <input type={"text"} placeholder={"username"} onChange={this.handleChangeUsername.bind(this)}></input>}
                            </div>
                            <div>
                                Lösenord:
                            </div>
                            <div>
                                {this.props.aUser && <input type={"password"} placeholder={"password"} onChange={this.handleChangePassword.bind(this)}></input>}
                                {!this.props.aUser && <input type={"password"} placeholder={"password"} onChange={this.handleChangePassword.bind(this)}></input>}
                            </div>
                            <div>
                                <button type={"submit"} onClick={this.handleSubmitLogin.bind(this)}>Logga in</button>
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
                        <form onSubmit={this.handleSubmitRegister.bind(this)}>
                            <div>
                                Registrera dig:
                        </div>
                            {this.state.failedRegistration && <div>
                                {this.state.error}
                            </div>
                            }
                            <div>
                                Användarnamn:
                        </div>
                            <div>
                                {this.props.aUser && <input type={"text"} placeholder={"username"} onChange={this.handleChangeUsername.bind(this)}></input>}
                                {!this.props.aUser && <input type={"text"} placeholder={"username"} onChange={this.handleChangeUsername.bind(this)}></input>}
                            </div>
                            <div>
                                Email:
                        </div>
                            <div>
                                {this.props.aUser && <input type={"email"} placeholder={"username"} onChange={this.handleChangeEmail.bind(this)}></input>}
                                {!this.props.aUser && <input type={"email"} placeholder={"username"} onChange={this.handleChangeEmail.bind(this)}></input>}
                            </div>
                            <div>
                                Lösenord:
                            </div>
                            <div>
                                {this.props.aUser && <input type={"password"} placeholder={"password"} onChange={this.handleChangePassword.bind(this)}></input>}
                                {!this.props.aUser && <input type={"password"} placeholder={"password"} onChange={this.handleChangePassword.bind(this)}></input>}
                            </div>
                            <div>
                                <button type={"submit"} onClick={this.handleSubmitRegister.bind(this)}>Registera</button>
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

export default AdminLogin;