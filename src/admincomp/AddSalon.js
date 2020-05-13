import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

class AddSalon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            seats: 0,
        }
    }

    async eventChangeName(e) {
        this.setState({ name: e.target.value })
    }
    async eventChangeSeats(e) {
        this.setState({ seats: e.target.value })
    }

    onSubmitHandle(e) {
        e.preventDefault()

        axios.post('http://localhost:1337/salons/', {
            Name: this.state.name,
            seats: this.state.seats,
        })

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
                                <input type="text" name="name" onChange={this.eventChangeName.bind(this)}></input>
                            </div>
                            <div>Antal Platser</div>
                            <div className={"addFormInput"}>
                                <input type="number" min="1" name="seats" onChange={this.eventChangeSeats.bind(this)}></input>
                            </div>
                            <div className={"addFormButtonDiv"}>
                                <button type="submit" className={"addFormButton"}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(AddSalon);