import React, { Component } from "react";
import axios from "axios";

class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moviedate: [],
        }
    }

    componentDidMount() {
        var movieDates = []
        var movie_dates = []
        axios
            .get('http://localhost:1337/moviedates/')
            .then((res) => {
                return (
                    movie_dates = res.data
                )
            })
        movie_dates.foreach(async function (entry) {
            if (entry.movie.id != this.props.match.params.id) {
                movieDates.append(entry)
            }
        })
        this.setState({ moviedate: movieDates })
    }

    render() {
        return (
            <div> Test { console.log(this.state)}</div>
        )
    }
}

export default Movie;