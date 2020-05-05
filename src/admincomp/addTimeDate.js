import React, { Component } from "react";
import axios from "axios";

class addTimeDate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datetime: undefined,
        }
    }

    async eventChangeDateTime(e) {
        this.setState({ datetime: e.target.value })
        console.log(this.state)
    }

    async onSubmitHandle(e) {
        e.preventDefault()

        // add info to database from state
        const res1 = await axios.post('http://localhost:1337/movies/', {
            date: this.state.datetime,
        })
        console.log(res1)
    }

    render() {
        return (
            <div className={"addFormMain"}>
                <div className={"addFormWrapper"}>
                    <div className={"addFormContainer"}>
                        <form className={"addForm"} onSubmit={this.onSubmitHandle.bind(this)}>
                            <div>Datum och tid</div>
                            <div className={"addFormInput"}>
                                <input type="datetime-local" name="datetime" onChange={this.eventChangeDateTime.bind(this)}></input>
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

export default addTimeDate;