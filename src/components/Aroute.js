import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../styles/_main.scss"
import Main from "./Main";
import Bookings from "./Bookings";
import Movie from "./Movie";
import Nav from "./Nav";

const Aroute = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Route path="/bookings" exact component={Bookings}></Route>
            <Route path="/movie/:id" render={(props) => <Movie {...props} />}></Route>
            <Route path="/" exact component={Main}></Route>
        </BrowserRouter>
    )
}

export default Aroute;