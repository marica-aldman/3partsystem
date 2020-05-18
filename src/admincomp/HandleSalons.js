import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link, withRouter } from "react-router-dom";

class HandleSalons extends Component {
    constructor(props) {
        super(props);

        if (localStorage.getItem('savedSalon')) {
            window.location.reload(false);
            localStorage.removeItem('savedSalon');
        }
        this.state = {
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1337/salons/').then((res) => {
            this.setState({ salons: res.data })
        })
    }

    async onSubmitHandle(e) {
        e.preventDefault()
        axios.get('http://localhost:1337/salons/?id=' + e.target.movie.value).then((salon) => {
            this.setState({ salon: salon.data })
            localStorage.setItem('changeSalon', JSON.stringify(this.state.salon))
            this.props.history.push("/mod/editSalon")
        })
    }

    render() {

        if (this.props.aUserGroup !== "admin") {
            return (<Redirect to="/" />)
        }
        return (
            <div className={"shedulesMain"}>
                <div className={"shedulesWrapper"}>
                    <div>
                        <div>
                            <h2>Salonger</h2>
                        </div>
                        <div>
                            <Link to="/mod/addSalon">
                                <button>Lägg till Salong</button>
                            </Link>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Namn
                                </th>
                                <th>
                                    Platser
                                </th>
                                <th>
                                    Ändra
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.salons && this.state.salons.map((salon) =>
                                <tr>
                                    <td>
                                        {salon.Name}
                                    </td>
                                    <td>
                                        {salon.seats}
                                    </td>
                                    <td>
                                        <form className={"editShedule"} onSubmit={this.onSubmitHandle.bind(this)}>
                                            <button type="submit" name="movie" value={salon.id} className={"editSheduleButton"}>Edit</button>
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

export default withRouter(HandleSalons);