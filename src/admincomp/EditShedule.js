import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

class EditShedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: null || JSON.parse(localStorage.getItem('changeShedule')),
        }
    }

    async componentDidMount() {
        const res1 = await axios.get('http://localhost:1337/movies/')
        const res2 = await axios.get('http://localhost:1337/movies/1')
        this.setState({ movies: res1.data, movie: res2.data })
    }

    handleMovie = (e) => {
        axios.get('http://localhost:1337/movies/' + e.target.value).then((resM) => {
            console.log(resM)
            this.setState({ movie: resM.data })
        })
    }

    onSubmitHandleSaveDate(e) {

        // get the movie

        axios.put('http://localhost:1337/dates/' + this.state.date.id, {
            movie: this.state.movie
        })

        localStorage.removeItem('changeShedule');
        this.props.history.push("/mod/shedules");
    }

    render() {

        if (this.props.aUserGroup != "admin") {
            return (<Redirect to="/" />)
        }
        console.log(this.state.date)

        return (
            <div className={"editSheduleMain"}>
                <div className={"editSheduleWrapper"}>
                    <form className={"editShedule"} onSubmit={this.onSubmitHandleSaveDate.bind(this)}>
                        <div>
                            Salong
                        </div>
                        <div>
                            {this.state.date.salon.Name}
                        </div>
                        <div>
                            Datum
                        </div>
                        <div>
                            {this.state.date.date}
                        </div>
                        <div>
                            Tid
                        </div>
                        <div>
                            {this.state.date.time === "17:00:00.000" ? "17.00" : this.state.date.time === "19:30:00.000" ? "19.00" : this.state.date.time === "22:00:00.000" ? "22.00" : "Oh Dear"}
                        </div>
                        <div>
                            Film
                        </div>
                        <div>
                            <select name={"movie"} onChange={this.handleMovie}>
                                {this.state.movies && this.state.movies.map((movie) =>
                                    <option value={movie.id}>
                                        {movie.title}
                                    </option>
                                )}
                            </select>
                        </div>

                        <button type="submit">Spara</button>
                    </form >
                </div >
            </div >
        )
    }
}

export default withRouter(EditShedule);