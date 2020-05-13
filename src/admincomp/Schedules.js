
import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link, withRouter } from "react-router-dom";

class Shedules extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1337/dates/').then((res) => {
            this.setState({ dates: res.data });
        })
    }

    async onSubmitHandle(e) {
        e.preventDefault()
        axios.get('http://localhost:1337/dates/' + e.target.date.value).then((theDate) => {
            localStorage.setItem('changeShedule', JSON.stringify(theDate.data))
            this.props.history.push("/mod/editShedule")
        })
    }

    render() {

        if (this.props.aUserGroup != "admin") {
            return (<Redirect to="/" />)
        }
        return (
            <div className={"shedulesMain"}>
                <div className={"shedulesWrapper"}>
                    <div>
                        <div>
                            <h2>Scheman</h2>
                        </div>
                        <div>
                            <Link to="/mod/createShedule">
                                <button>Lägg till schema</button>
                            </Link>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Datum
                                </th>
                                <th>
                                    Tid
                                </th>
                                <th>
                                    Salong
                                </th>
                                <th>
                                    Film
                                </th>
                                <th>
                                    Biljetter kvar
                                </th>
                                <th>
                                    Ändra
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.dates && this.state.dates.map((date) =>
                                <tr>
                                    <td>
                                        {date.date}
                                    </td>
                                    <td>
                                        {date.time}
                                    </td>
                                    <td>
                                        {date.salon.name}
                                    </td>
                                    <td>
                                        {date.movie.title}
                                    </td>
                                    <td>
                                        {date.TicketsLeft}
                                    </td>
                                    <td>
                                        <form className={"editShedule"} onSubmit={this.onSubmitHandle.bind(this)}>
                                            <button type="submit" name="date" value={date.id} className={"editSheduleButton"}>Edit</button>
                                        </form>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(Shedules);