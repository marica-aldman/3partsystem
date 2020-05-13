import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

class EditSalon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salon: null || JSON.parse(localStorage.getItem('changeSalon')),
            name: "" || JSON.parse(localStorage.getItem('changeSalon'))[0].Name,
            seats: 0 || JSON.parse(localStorage.getItem('changeSalon'))[0].seats,
        }
    }

    eventChangeName(e) {
        this.setState({ name: e.target.value })
    }
    eventChangeSeats(e) {
        this.setState({ seats: e.target.value })
    }

    onSubmitHandle(e) {
        e.preventDefault()

        axios.put('http://localhost:1337/salons/' + this.state.salon[0].id, {
            Name: this.state.name,
            seats: this.state.seats,
        })
        localStorage.removeItem('changeSalon');
        localStorage.setItem('savedSalon', true);
        this.props.history.push("/mod/salons");
    }

    onSubmitHandleDelete(e) {
        e.preventDefault()
        console.log(this.state)

        axios.delete('http://localhost:1337/salons/' + this.state.salon[0].id)
        localStorage.removeItem('changeSalon');
        localStorage.setItem('savedSalon', true);
        this.props.history.push("/mod/salons");
    }

    render() {

        if (this.props.aUserGroup != "admin") {
            return (<Redirect to="/" />)
        }
        let divtext;
        if (this.state.imageID) {
            divtext = "Salongen har lagts till i databasen"
        } else {
            divtext = ""
        }
        return (
            <div className={"addFormMain"}>
                <div className={"addFormWrapper"}>
                    <div className={"addFormText"}>
                        {divtext}
                    </div>
                    <div className={"addFormContainer"}>
                        <form className={"addForm"} onSubmit={this.onSubmitHandle.bind(this)}>
                            <div>Namn</div>
                            <div className={"addFormInput"}>
                                <input type="text" name="name" onChange={this.eventChangeName.bind(this)} defaultValue={this.state.name}></input>
                            </div>
                            <div>Antal Platser</div>
                            <div className={"addFormInput"}>
                                <input type="number" min="1" name="seats" onChange={this.eventChangeSeats.bind(this)} defaultValue={this.state.seats}></input>
                            </div>
                            <div className={"addFormButtonDiv"}>
                                <button type="submit" className={"addFormButton"}>Save</button>
                            </div>
                        </form>
                        <form onSubmit={this.onSubmitHandleDelete.bind(this)} className={"addForm"}>
                            <div className={"addFormButtonDiv"}>
                                <button type="submit" className={"addFormButton"}>delete</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(EditSalon);