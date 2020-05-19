import React, { Component } from 'react';
import firebase from "../components/FirebaseConfig";

class UserProfile extends Component {
    constructor(props) {
        super(props);

        var userU;
        var userE;

        if (firebase.auth().currentUser) {
            userU = firebase.auth().currentUser.username;
            userE = firebase.auth().currentUser.email;
        } else {
            userU = null;
            userE = null;
        }
        this.state = {
            condition: true,
            passwordChange: false,
            preventEarlySubmit: true,
            username: userU,
            email: userE,
            error: "",
            message: "",
            oldPassword: "",
            newPassword: "",
            newPasswordRepeat: "",
        }
    }

    changeCondition = (e) => {
        e.preventDefault();
        if (this.state.condition) {
            this.setState({ condition: false, message: "" });
        } else {
            this.setState({ condition: true, message: "" });
        }
    }

    changePassword = (e) => {
        e.preventDefault();
        if (this.state.passwordChange) {
            this.setState({ passwordChange: false, message: "" });
        } else {
            this.setState({ passwordChange: true, message: "" });
        }
    }

    onChangeUsername = (e) => {
        e.preventDefault();
        var username = e.target.value;
        if (username.length > 1) {
            this.setState({ username: e.target.value });
        } else {
            this.setState({ username: null });
        }
    }

    onChangeEmail = (e) => {
        e.preventDefault();
        var email = e.target.value;
        if (email.length > 1) {
            this.setState({ email: e.target.value });
        } else {
            this.setState({ email: null });
        }
    }

    onChangeOldPassword = (e) => {
        e.preventDefault();
        this.setState({ oldPassword: e.target.value });
    }
    onChangeNewPassword = (e) => {
        e.preventDefault();
        this.setState({ newPassword: e.target.value });
        this.testPassword("new", e.target.value);
    }
    onChangeNewPasswordRepeat = (e) => {
        e.preventDefault();
        this.setState({ newPasswordRepeat: e.target.value });
        this.testPassword("repeat", e.target.value);
    }

    testPassword(testType, value) {
        if (testType === "new" && value !== "") {
            if (this.state.newPasswordRepeat === value) {
                this.setState({ error: "Lösenorden matchar", preventEarlySubmit: false });
            } else if (this.state.newPasswordRepeat !== "") {
                this.setState({ error: "Lösenorden matchar inte", preventEarlySubmit: true });
            }
        } else if (testType === "repeat") {
            if (this.state.newPassword === value) {
                this.setState({ error: "Lösenorden matchar", preventEarlySubmit: false });
            } else if (this.state.newPassword !== "") {
                this.setState({ error: "Lösenorden matchar inte", preventEarlySubmit: true });
            }
        }
    }

    onSubmitChangePassword = (e) => {
        e.preventDefault();
        var user = firebase.auth().currentUser
        var credential = firebase.auth.EmailAuthProvider.credential(
            this.state.email,
            this.state.oldPassword,
        );

        var password = this.state.newPassword;
        user.reauthenticateWithCredential(credential).then(
            user.updatePassword(password).catch((error1) => {
                //console.log(error1);
                //console.log("Password not changed " + error1.code);
                if (error1.code === "auth/weak-password") {
                    this.setState({ passwordChange: true, message: "Lösenordet ej ändrat. Nytt lösenord för svagt." })
                } else if (error1.code === "wrong-password") {
                    this.setState({ passwordChange: true, message: "Lösenordet ej ändrat. Gammalt lösenord felaktigt." })
                }
            }).then((test) => {
                if (this.state.message === "") {
                    this.setState({ passwordChange: false, message: "Lösenordet ändrat.", error: "", oldPassword: "", newPassword: "", newPasswordRepeat: "", preventEarlySubmit: true });
                }
            })
        ).catch((error2) => {
            console.log(error2)
            this.setState({ passwordChange: true, message: "Lösenordet ej ändrat." });
        })
    }

    onSubmitEdit(e) {
        e.preventDefault();
        var user = firebase.auth().currentUser;
        if (this.state.username === null && this.state.email === null) {
            this.changeCondition();
        } else if (this.state.username === null) {
            user.updateEmail(this.state.email);
            this.changeCondition();
        } else if (this.state.email === null) {
            user.updateProfile({ displayName: this.state.username });
            this.changeCondition();
        } else {
            user.updateProfile({ displayName: this.state.username });
            user.updateEmail(this.state.email);
            this.changeCondition();
        }
    }

    componentWillMount() {

    }
    render() {
        return (
            <div>
                {!this.state.passwordChange && this.state.condition ?
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    {this.state.message}
                                </td>
                                <td>
                                    &nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Namn:
                                </td>
                                <td>
                                    {this.state.username}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Email:
                                </td>
                                <td>
                                    {this.state.email}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={this.changePassword}>Ändra lösenord</button>
                                </td>
                                <td>
                                    <button onClick={this.changeCondition}>Ändra min information</button>
                                </td>
                            </tr>
                        </tbody>
                    </table> :
                    !this.state.passwordChange && !this.state.condition ?
                        <form>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            {this.state.message}
                                        </td>
                                        <td>
                                            &nbsp;
                                </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Namn:
                                    </td>
                                        <td>
                                            <input type="text" name="username" onChange={this.onChangeUsername} placeholder={this.state.username}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Email:
                                    </td>
                                        <td>
                                            <input type="email" name="email" onChange={this.onChangeEmail} placeholder={this.state.email}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            &nbsp;
                                    </td>
                                        <td>
                                            <button onClick={this.onSubmitEdit}>Spara</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                        :
                        <div>
                            <form onSubmit={this.onSubmitChangePassword}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {this.state.message}
                                            </td>
                                            <td>
                                                &nbsp;
                                </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Gammalt lösenord:
                                    </td>
                                            <td>
                                                <input type="password" name="oldPassword" onChange={this.onChangeOldPassword} placeholder={this.state.oldpassword}></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Nytt Lösenord:
                                    </td>
                                            <td>
                                                <input type="password" name="newPassword" onChange={this.onChangeNewPassword} placeholder={this.state.newpassword}></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Upprepa Lösenord:
                                    </td>
                                            <td>
                                                <input type="password" name="newPasswordRepeat" onChange={this.onChangeNewPasswordRepeat} placeholder={this.state.newpasswordrepeat}></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {this.state.error}
                                            </td>
                                            <td>
                                                {this.state.preventEarlySubmit ? <button type="submit" disabled>Spara</button> : <button type="submit">Spara</button>}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>

                            <button onClick={this.changePassword}>Tillbaka</button>
                        </div>
                }

            </div>
        )
    }
}

export default UserProfile;