import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link, withRouter } from "react-router-dom";

class HandleMovies extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
        axios.get('http://localhost:1337/movies/').then((res) => {
            this.setState({ movies: res.data })
        })
    }

    async onSubmitHandle(e) {
        e.preventDefault()
        console.log(e)
        axios.get('http://localhost:1337/movies/?id=' + e.target.movie.value).then((theMovie) => {
            console.log(theMovie)
            this.setState({ movie: theMovie.data })
            console.log(this.state.movie)
            localStorage.setItem('changeMovie', JSON.stringify(this.state.movie))
            this.props.history.push("/mod/editMovie")
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
                            <h2>Filmer</h2>
                        </div>
                        <div>
                            <Link to="/mod/addMovie">
                                <button>Lägg till Film</button>
                            </Link>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Bild
                                </th>
                                <th>
                                    Titel
                                </th>
                                <th>
                                    Pris
                                </th>
                                <th>
                                    Ändra
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies && this.state.movies.map((movie) =>
                                <tr>
                                    <td>
                                        <img src={"http://localhost:1337" + movie.image[0].formats.thumbnail.url} alt={"Movie thumbnail"} className={"MovieList"} />
                                    </td>
                                    <td>
                                        {movie.title}
                                    </td>
                                    <td>
                                        {movie.price}
                                    </td>
                                    <td>
                                        <form className={"editShedule"} onSubmit={this.onSubmitHandle.bind(this)}>
                                            <button type="submit" name="movie" value={movie.id} className={"editSheduleButton"}>Edit</button>
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

export default withRouter(HandleMovies);