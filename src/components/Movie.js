import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import MovieInfo from './MovieInfo';
import BookingStructure from './BookingStructure';


class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: undefined,
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:1337/movies/',
                {
                    params: {
                        id: this.props.movie
                    }
                })
            .then((res) => {

                this.setState({ movie: res.data[0] });
            })
    }

    render() {
        if (!this.props.movie) {
            return (<Redirect to="/" />)
        }
        return (
            <div className={"main-display"}>
                {this.state.movie && <MovieInfo movie={this.state.movie} />}
                {<BookingStructure movie={this.props.movie} />}
            </div >
        )
    }
}

export default Movie;