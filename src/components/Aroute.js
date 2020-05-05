import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/_main.scss"
import Main from "./Main";
import Bookings from "./Bookings";
import Movie from "./Movie";
import Nav from "./Nav";

import AdminNav from "../admincomp/AdminNav";
import AdminView from "../admincomp/AdminView";
import addMovie from "../admincomp/addMovie";
import addTimeDate from "../admincomp/addTimeDate";

import CustomerNav from "../customercomp/CustomerNav";
import CustomerOverview from "../customercomp/CustomerOverview";
class Aroute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            userGroup: null,
        }
    }

    changeUser = (e) => { this.setState({ user: e }) }
    changeUserGroup = (e) => {
        this.setState({ userGroup: e });
        console.log(e);
    }

    render() {
        return (
            <BrowserRouter>
                <Nav aUser={this.state.user} aUserGroup={this.state.userGroup} changeUser={this.changeUser} changeUserGroup={this.changeUserGroup} />
                {this.state.userGroup === "admin" && <AdminNav aUser={this.state.user} />}
                {this.state.userGroup === "Authenticated" && <CustomerNav aUser={this.state.user} />}
                <Route path="/bookings" exact component={Bookings}></Route>
                <Route user={this.state.user} path="/addMovie" exact component={addMovie}></Route>
                <Route user={this.state.user} path="/addDate" exact component={addTimeDate}></Route>
                <Route path="/Admin" exact component={() => <AdminView aUser={this.state.user} />}></Route>
                <Route path="/CustomerOverview" exact component={() => <CustomerOverview aUser={this.state.user} />}></Route>
                <Route path="/movie/:id" render={(props) => <Movie {...props} />}></Route>
                <Route path="/" exact component={Main}></Route>
            </BrowserRouter >
        )
    }
}

export default Aroute;