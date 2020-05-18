import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class addDates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datetimes: undefined,
        }
    }

    componentDidMount() {
        //todays date
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + mm + dd;
        console.log(today);
        //calculate dates for the next week
    }

    async eventChangeDateTime(e) {
        this.setState({ datetime: e.target.value })
        console.log(this.state)
    }

    async onSubmitHandle(e) {
        e.preventDefault()
        //check what is in the form and add each datetime
    }

    render() {

        if (this.props.aUserGroup !== "admin") {
            return (<Redirect to="/" />)
        }
        return (
            <div className={"addFormMain"}>
                <div className={"addFormWrapper"}>
                    <div className={"addFormContainer"}>
                        <form className={"addForm"} onSubmit={this.onSubmitHandle.bind(this)}>
                            <div>Vilka datum?</div>
                            <div className={"addFormInput"}>
                                <select>
                                    <option>

                                    </option>
                                </select>
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

export default addDates;