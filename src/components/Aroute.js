import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import firebase from "../components/FirebaseConfig";
import "../styles/_main.scss"
import Main from "./Main";
import Movie from "./Movie";
import Nav from "./Nav";

import AdminNav from "../admincomp/AdminNav";
import AdminView from "../admincomp/AdminView";
import AddMovie from "../admincomp/AddMovie";
import EditMovie from "../admincomp/EditMovie";
import HandleMovies from "../admincomp/HandleMovies";
import AddSalon from "../admincomp/AddSalon";
import EditSalon from "../admincomp/EditSalon";
import HandleSalons from "../admincomp/HandleSalons";
import HandleShedule from "../admincomp/HandleShedule";
import Schedules from "../admincomp/Schedules";
import EditShedule from "../admincomp/EditShedule";

import CustomerNav from "../customercomp/CustomerNav";
import CustomerOverview from "../customercomp/CustomerOverview";
import Bookings from "../customercomp/Bookings";
class Aroute extends Component {
    constructor(props) {
        super(props);

        var userG = undefined;
        var userE = undefined;
        var userA = undefined;
        var userN = undefined;
        if (firebase.auth().currentUser) {
            userG = "Customer";
            userE = firebase.auth().currentUser.email;
            userN = firebase.auth().currentUser.displayName;
        } else if (localStorage.getItem('ug')) {
            userG = localStorage.getItem('ug');
            if (userG === "Customer") {
                userG = null;
                userE = null;
                userA = null;
                userN = null;
                localStorage.clear()
            }
        } else if (localStorage.getItem('ua')) {
            userA = localStorage.getItem('ua');
        } else if (localStorage.getItem('u')) {
            userE = localStorage.getItem('u');
            userN = localStorage.getItem('un');
        } else {
            userG = null;
            userE = null;
            userA = null;
            userN = null;
        }

        this.state = {
            user: userE,
            userAuth: userA,
            userGroup: userG,
            userName: userN,
            movie: null || localStorage.getItem('movie'),
        }
    }

    changeUser = (e) => {
        this.setState({ user: e });
        localStorage.setItem('u', this.state.user);
    }

    changeUserName = (e) => {
        this.setState({ userName: e });
        localStorage.setItem('un', this.state.userName);
    }

    changeUserAuth = (e) => {
        this.setState({ userAuth: e });
        localStorage.setItem('ua', this.state.userAuth);
    }
    changeUserGroup = (e) => {
        console.log(e)
        this.setState({ userGroup: e });
        localStorage.setItem('ug', this.state.userGroup);
    }
    changeMovie = (e) => {
        this.setState({ movie: e });
        localStorage.setItem('movie', e);
    }

    render() {
        return (
            < BrowserRouter >
                <Nav aUser={this.state.user} aUserGroup={this.state.userGroup} changeUser={this.changeUser} changeUserName={this.changeUserName} changeUserAuth={this.changeUserAuth} changeUserGroup={this.changeUserGroup} />
                {(this.state.userGroup === "admin" || localStorage.getItem('ug') === "admin") && <AdminNav aUser={this.state.user} aUserGroup={this.state.userGroup} />}
                {(this.state.userGroup === "Customer" || localStorage.getItem('ug') === "Customer") && <CustomerNav aUser={this.state.user} aUserGroup={this.state.userGroup} />}
                <Route path="/bookings" exact component={() => <Bookings aUser={this.state.user} aUserGroup={this.state.userGroup} />}></Route>
                <Route path="/Admin" exact component={() => <AdminView aUser={this.state.user}
                    changeUser={this.changeUser} changeUserName={this.changeUserName} changeUserAuth={this.changeUserAuth} changeUserGroup={this.changeUserGroup} />}></Route>
                <Route path="/mod/movies" exact component={() => <HandleMovies aUser={this.state.user} aUserGroup={this.state.userGroup} />}></Route>
                <Route path="/mod/editMovie" exact component={() => <EditMovie aUser={this.state.user} aUserGroup={this.state.userGroup} />}></Route>
                <Route path="/mod/addMovie" exact component={() => <AddMovie aUser={this.state.user} aUserGroup={this.state.userGroup} />}></Route>
                <Route path="/mod/salons" exact component={() => <HandleSalons aUser={this.state.user} aUserGroup={this.state.userGroup} />}></Route><Route path="/mod/editSalon" exact component={() => <EditSalon aUser={this.state.user} aUserGroup={this.state.userGroup} />}></Route>
                <Route path="/mod/addSalon" exact component={() => <AddSalon aUser={this.state.user} aUserGroup={this.state.userGroup} />}></Route>
                <Route path="/mod/createShedule" exact component={() => <HandleShedule aUser={this.state.user} aUserGroup={this.state.userGroup} />}></Route>
                <Route path="/mod/shedules" exact component={() => <Schedules aUser={this.state.user} aUserGroup={this.state.userGroup} />}></Route>
                <Route path="/mod/editShedule" exact component={() => <EditShedule aUser={this.state.user} aUserGroup={this.state.userGroup} />}></Route>
                <Route path="/CustomerOverview" exact component={() => <CustomerOverview aUser={this.state.user} aUserGroup={this.state.userGroup} changeUser={this.changeUser} changeUserName={this.changeUserName} changeUserAuth={this.changeUserAuth} changeUserGroup={this.changeUserGroup} />}></Route>
                <Route path="/movie/" exact component={() => <Movie aUser={this.state.user} aUserGroup={this.state.userGroup} movie={this.state.movie} />}></Route>
                <Route path="/" exact component={() => <Main aUser={this.state.user} aUserGroup={this.state.userGroup} doChangeMovie={this.changeMovie} movie={this.state.movie} />}></Route>
            </BrowserRouter >
        )
    }
}

export default Aroute;