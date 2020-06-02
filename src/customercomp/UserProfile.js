import React, { Component } from 'react';
import { Redirect, withRouter } from "react-router-dom";
import firebase from "../components/FirebaseConfig";
import 'firebase/firestore';
import 'firebase/storage';

class UserProfile extends Component {
    constructor(props) {
        super(props);


        this.state = {
            loginFirebase: true,
            infoChange: false,
            passwordChange: false,
            emailChange: false,
            accountDelete: false,
            preventEarlySubmit: true,
            username: null,
            firstname: null,
            lastname: null,
            profPic: null,
            profPicUpdate: false,
            email: null,
            error: "",
            message: "",
            newEmail: "",
            newUsername: "",
            newFirstName: "",
            newLastName: "",
            oldPassword: "",
            newPassword: "",
            newPasswordRepeat: "",
            deleteAccountError: "",
        }
    }

    componentDidMount() {
        if (localStorage.getItem('firebaseui::rememberedAccounts')) {
            this.setState({ loginFirebase: false })
            var googleInfo = JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'))[0];
            this.setState({ username: googleInfo.displayName, email: googleInfo.email, profPic: googleInfo.photoUrl, providerID: googleInfo.providerId })
            var nameArray = googleInfo.displayName.split(" ");
            this.setState({ firstname: nameArray[0], lastname: nameArray[1] });
        } else if (firebase.auth().currentUser) {
            this.setState({ username: localStorage.getItem("un"), email: firebase.auth().currentUser.email })
            firebase.firestore().collection("userProfile").doc(firebase.auth().currentUser.$.W).get()
                .then((test) => {
                    if (test.exists) {
                        var currentFirstName = test.data().firstName;
                        var currentLastName = test.data().lastName;
                        if (!currentFirstName) {
                            currentFirstName = "";
                        }
                        if (!currentLastName) {
                            currentLastName = "";
                        }
                        this.setState({ firstname: currentFirstName, lastname: currentLastName });
                        if (test.data().picture) {
                            var storageRef = firebase.storage().ref();
                            var userRefPic = "ProfilePicture" + firebase.auth().currentUser.$.W;
                            // Create a reference to 'images/pp.jpg'
                            var profileImagesRef = storageRef.child('images/' + userRefPic);
                            profileImagesRef.getDownloadURL().catch(error => {
                                console.log(error.code);
                            }).then(url => {
                                if (url !== undefined) {
                                    this.setState({ profPic: url })
                                } else {
                                    this.setState({ profPic: "#" })
                                }
                            })
                        } else {
                            this.setState({ profPic: "#" })
                        }
                    }
                });

        } else {
            this.props.history.push("/");
        }
    }

    changeInfo = (e) => {
        e.preventDefault();
        if (this.state.infoChange) {
            this.setState({ infoChange: false, message: "" });
        } else {
            this.setState({ infoChange: true, message: "" });
        }
    }

    changePassword = (e) => {
        e.preventDefault();
        if (this.state.passwordChange) {
            this.setState({ passwordChange: false, message: "", preventEarlySubmit: true });
        } else {
            this.setState({ passwordChange: true, message: "" });
        }
    }

    changeEmail = (e) => {
        e.preventDefault();
        if (this.state.emailChange) {
            this.setState({ emailChange: false, message: "", preventEarlySubmit: true });
        } else {
            this.setState({ emailChange: true, message: "" });
        }
    }

    toDeleteAccount = (e) => {
        e.preventDefault();
        if (this.state.accountDelete) {
            this.setState({ accountDelete: false, message: "", preventEarlySubmit: true });
        } else {
            this.setState({ accountDelete: true, message: "" });
        }
    }

    onChangeUsername(typeOfName, name) {
        if (typeOfName === "First") {
            this.setState({ newUsername: name + " " + this.state.lastname });
        } else if (typeOfName === "Last") {
            this.setState({ newUsername: this.state.firstname + " " + name });
        }
    }

    onChangeFirstName = (e) => {
        e.preventDefault();
        this.setState({ newFirstName: e.target.value });
        this.onChangeUsername("First", e.target.value);
        e.preventDefault();
        this.setState({ newFirstname: e.target.value });
        this.onChangeUsername()
    }

    onChangeLastName = (e) => {
        e.preventDefault();
        this.setState({ newLastName: e.target.value });
        this.onChangeUsername("Last", e.target.value);
    }

    onChangeEmail = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value });
    }

    onChangeNewEmail = (e) => {
        e.preventDefault();
        this.setState({ newEmail: e.target.value });
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
            this.setState({ passwordChange: true, message: "Lösenordet ej ändrat." });
        })
    }

    onSubmitEditEmail = (e) => {
        e.preventDefault();
        if (this.state.newEmail && this.state.oldPassword) {
            var user = firebase.auth().currentUser
            var credential = firebase.auth.EmailAuthProvider.credential(
                this.state.email,
                this.state.oldPassword,
            );

            this.setState({ message: "" });
            var email = this.state.newEmail;
            user.reauthenticateWithCredential(credential).then(
                user.updateEmail(email).catch((error1) => {
                    this.setState({ message: "Fel: " + error1.code });
                }).then((test) => {
                    this.setState({ message: "Emailadress ändrad.", email: this.state.newEmail });
                    this.setState({ emailChange: false, error: "", preventEarlySubmit: true, oldPassword: "", newEmail: "" });
                })
            ).catch((error2) => {
                if (error2.code === "wrong-password") {
                    this.setState({ message: "Lösenord felaktigt." })
                } else {
                    this.setState({ message: "Fel: " + error2.code });
                }
            })
        } else {
            if (this.state.oldPassword) {
                if (!this.state.newEmail) {
                    this.setState({ error: "Var god fyll i formuläret." });
                } else {
                    this.setState({ error: "Du måste fylla i en emailadress" });
                }
            } else if (this.state.newEmail) {
                this.setState({ error: "Du måste fylla ditt lösenord för att ändra email adress." });
            }
        }
    }

    async onSubmitEdit(e) {
        e.preventDefault();
        var file = e.target.profilePicture.files[0];
        // database refrence
        const docRef = firebase.firestore().collection('userProfile').doc(firebase.auth().currentUser.$.W);
        // root reference for file uploads
        var storageRef = firebase.storage().ref();
        // user
        var user = firebase.auth().currentUser;
        // current profile
        var currentUserProfile;
        await docRef.get().then((user) => {
            var currentFirstName = user.data().firstName;
            if (!user.data().firstName) {
                currentFirstName = "";
            }
            var currentLastName = user.data().lastName;
            if (!user.data().lastName) {
                currentLastName = "";
            }
            var currentPicture = user.data().picture;
            currentUserProfile = { 'firstName': currentFirstName, 'lastName': currentLastName, 'picture': currentPicture };
        });

        //file upload
        // check if there is one and then upload
        if (file) {
            // Create a reference to 'pp.jpg'
            var userRefPic = "ProfilePicture" + firebase.auth().currentUser.$.W;
            // Create a reference to 'images/pp.jpg'
            var profileImagesRef = storageRef.child('images/' + userRefPic);
            await profileImagesRef.put(file);
            await profileImagesRef.getDownloadURL().then(function (url) {
                currentUserProfile['picture'] = true;
            });
            this.setState({ profPicUpdate: true });
        }

        if (this.state.newUsername) {
            currentUserProfile['firstName'] = this.state.newFirstName;
            currentUserProfile['lastName'] = this.state.newLastName;
            await user.updateProfile({ displayName: this.state.newUsername }).catch(error => { console.log(error) })
        }
        if (this.state.newUsername || this.state.profPicUpdate) {
            docRef.update(currentUserProfile);
            this.setState({ message: "Profilinformation updaterad", username: this.state.newUsername, firstname: this.state.newFirstName, lastname: this.state.newLastName, profPic: currentUserProfile['profilePicture'] });
            this.setState({ infoChange: false, newUsername: "", profPicUpdate: false, newFirstName: "", newLastName: "" })
            window.location.reload(false);
        }
    }

    deleteAccount(e) {
        e.preventDefault();
        var email = e.target.email.value;
        var password = e.target.password.value;
        var theUser = firebase.auth().currentUser;
        if (email === theUser.email) {
            const databaseRef = firebase.firestore().collection("bookings");
            var LoginFirebase;
            if (localStorage.getItem('firebaseui::rememberedAccounts')) {
                LoginFirebase = false;
            } else {
                LoginFirebase = true;
            }
            // to delete bookings
            //get bookings
            databaseRef.get().then((res) => {
                var user = theUser.$.W;
                res.docs.map(doc => {
                    var dateID = doc.id;
                    //go through each one
                    databaseRef.doc(user).collection(dateID).doc("tickets").get().then(items => {
                        if (items.exists) {
                            var booking = items.data()
                            console.log(items)
                            //return tickets to stash
                            databaseRef.doc(dateID).get().then(dateRes => {
                                var currentStash = dateRes.data().ticketsLeft;
                                var newStash = currentStash + booking.amount;
                                databaseRef.doc(dateID).update({
                                    ticketsLeft: newStash
                                })
                                //remove booking
                                databaseRef.doc(user).collection(dateID).doc("tickets").delete().then(function () {
                                    console.log(this.state)
                                    if (!LoginFirebase) {
                                        firebase.auth().currentUser.delete();
                                        localStorage.clear();
                                        window.location.reload(false);
                                    } else if (LoginFirebase) {

                                        var email = e.target.email.value;
                                        var password = e.target.password.value;
                                        var credential = firebase.auth.EmailAuthProvider.credential(
                                            email,
                                            password,
                                        );
                                        // database refrence
                                        const docRef = firebase.firestore().collection('userProfile').doc(firebase.auth().currentUser.$.W);
                                        // root reference for file uploads
                                        var storageRef = firebase.storage().ref();
                                        // user
                                        // verify user

                                        user.reauthenticateWithCredential(credential).then((res) => {
                                            // start by removing files
                                            //first we need the reference
                                            var userRefPic = "ProfilePicture" + firebase.auth().currentUser.$.W;
                                            var profileImagesRef = storageRef.child('images/' + userRefPic);
                                            profileImagesRef.delete();
                                            // now delete user data in database
                                            docRef.delete();
                                            // delete user from auth
                                            firebase.auth().currentUser.delete();
                                            localStorage.clear();
                                            window.location.reload(false);

                                        }).catch(error => { console.log(error.code) })
                                    }
                                })
                            })
                        } else {
                            if (!LoginFirebase) {

                                firebase.auth().currentUser.delete();
                                localStorage.clear();
                                window.location.reload(false);
                            } if (LoginFirebase) {
                                var credential = firebase.auth.EmailAuthProvider.credential(
                                    email,
                                    password,
                                );
                                // database refrence
                                const docRef = firebase.firestore().collection('userProfile').doc(user);
                                // root reference for file uploads
                                var storageRef = firebase.storage().ref();
                                // user
                                // verify user

                                theUser.reauthenticateWithCredential(credential).then((res) => {
                                    // start by removing files
                                    //first we need the reference
                                    var userRefPic = "ProfilePicture" + user;
                                    var profileImagesRef = storageRef.child('images/' + userRefPic);
                                    profileImagesRef.delete();
                                    // now delete user data in database
                                    docRef.delete();
                                    // delete user from auth
                                    theUser.delete();
                                    localStorage.clear();
                                    this.setState({ deleteAccountError: "" });
                                    this.props.history.push("/");

                                }).catch(error => { console.log(error.code) })
                            }
                        }
                    })
                    return doc;
                })
            })
        } else {
            this.setState({ deleteAccountError: "Wrong email." });
        }

    }

    render() {
        if (!localStorage.getItem("u") || !localStorage.getItem("firebaseui::rememberedAccounts") || !firebase.auth().currentUser) {
            return (<Redirect to="/" />)
        }
        return (
            <div className={"profileMain"}>
                {!this.state.passwordChange && !this.state.infoChange && !this.state.emailChange && !this.state.accountDelete ?
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
                                    {this.state.username} {this.state.loginFirebase && <button onClick={this.changeInfo}>Ändra min information</button>}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Bild:
                                </td>
                                <td>
                                    <img src={this.state.profPic} alt={"profilepicture"} style={{ width: "40px" }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Email:
                                </td>
                                <td>
                                    {this.state.email} {this.state.loginFirebase && <button onClick={this.changeEmail}>Ändra emailadress</button>}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.loginFirebase && <button onClick={this.changePassword}>Ändra lösenord</button>}
                                </td>
                                <td>
                                    {this.state.loginFirebase ? <button onClick={this.toDeleteAccount}>Radera konto och personliga uppgifter</button> : <button onClick={this.toDeleteAccount}>Radera personliga uppgifter</button>}
                                </td>
                            </tr>
                        </tbody>
                    </table> :
                    !this.state.passwordChange && this.state.infoChange && !this.state.emailChange && !this.state.accountDelete ?
                        <div>
                            <form onSubmit={this.onSubmitEdit.bind(this)}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {this.state.message} {this.state.newUsername}
                                            </td>
                                            <td>
                                                &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Förnamn:
                                            </td>
                                            <td>

                                                {this.state.newFirstName === "" && <input type="text" name="firstname" onChange={this.onChangeFirstName} placeholder={this.state.firstname}></input>
                                                }

                                                {this.state.newFirstName !== "" && <input type="text" name="firstname" onChange={this.onChangeFirstName} placeholder={this.state.newFirstName}></input>
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Efternamn:
                                            </td>
                                            <td>
                                                {this.state.newLastName === "" &&
                                                    <input type="text" name="lastname" onChange={this.onChangeLastName} placeholder={this.state.lastname}></input>
                                                }

                                                {this.state.newLastName !== "" && <input type="text" name="lastname" onChange={this.onChangeLastName} placeholder={this.state.newLastName}></input>
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Bild:
                                            </td>
                                            <td>
                                                <input type="file" name="profilePicture"></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                &nbsp;
                                            </td>
                                            <td>
                                                <button type="submit">Spara</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>

                            <button onClick={this.changeInfo}>Tillbaka</button>
                        </div>
                        : this.state.passwordChange && !this.state.infoChange && !this.state.emailChange && !this.state.accountDelete ?
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
                            : !this.state.passwordChange && !this.state.infoChange && this.state.emailChange && !this.state.accountDelete ?
                                <div>
                                    <form onSubmit={this.onSubmitEditEmail}>
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
                                                        Ny emailadress:
                                                </td>
                                                    <td>
                                                        <input type="email" name="newEmail" onChange={this.onChangeNewEmail} placeholder={this.state.newEmail}></input>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Lösenord:
                                                </td>
                                                    <td>
                                                        <input type="password" name="oldPassword" onChange={this.onChangeOldPassword} placeholder={this.state.oldPassword}></input>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        {this.state.error}
                                                    </td>
                                                    <td>
                                                        <button type="submit">Spara</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>

                                    <button onClick={this.changeEmail}>Tillbaka</button>
                                </div>
                                :
                                this.state.loginFirebase ?
                                    <div>
                                        <form onSubmit={this.deleteAccount}>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            {this.state.deleteAccountError}
                                                        </td>
                                                        <td>
                                                            Verifera din loggin för att radera kontot. Radera kontot kan inte göras ogjort. All data om dig kommer att försvinna från vår databas.
                                                    </td>
                                                        <td>
                                                            &nbsp;
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            {this.state.message}
                                                        </td>
                                                        <td>
                                                            &nbsp;
                                            </td>
                                                    </tr>
                                                    {this.state.loginFirebase && <tr>
                                                        <td>
                                                            Emailadress:
                                                    </td>
                                                        <td>
                                                            <input type="email" name="email" ></input>
                                                        </td>
                                                    </tr>
                                                    }
                                                    {this.state.loginFirebase &&
                                                        <tr>
                                                            <td>
                                                                Lösenord:
                                                </td>
                                                            <td>
                                                                <input type="password" name="password" ></input>
                                                            </td>
                                                        </tr>
                                                    }
                                                    <tr>
                                                        <td>
                                                            {this.state.error}
                                                        </td>
                                                        <td>
                                                            <button type="submit">Radera</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </form>

                                        <button onClick={this.toDeleteAccount}>Tillbaka</button>
                                    </div>
                                    :
                                    <div>
                                        <p>
                                            Att radera dina personliga uppgifter tar bort alla dina personliga uppgifter från VÅR databas samt VÅR koppling till din inloggningstjänst. Vi kan inte ta bort ditt konto från den tjänsten men alla personliga uppgifter och konton i vår databas tas bort. Detta kan inte göras ogjort. Observera att detta betyder att alla dina gamla bokningar kommer försvinna.
                                        </p>

                                        <button onClick={this.toDeleteAccount}>Tillbaka</button>
                                        <button type="submit" onClick={this.deleteAccount}>Radera</button>
                                    </div>
                }

            </div>
        )
    }
}

export default withRouter(UserProfile);