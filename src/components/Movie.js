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
            userGroup: localStorage.getItem('ug') || null,
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
                axios
                    .get('http://localhost:1337/dates/')
                    .then((result) => {
                        this.state.movie.dates.map((date) => {
                            var i = 0;
                            while (i < result.data.length) {
                                if (result.data[i].id === date.id) {
                                    localStorage.setItem(result.data[i].id, JSON.stringify(result.data[i]));
                                }
                                i = i + 1;
                            }
                            return (date)
                        })
                    })
            })
    }

    render() {
        if (!this.props.movie) {
            return (<Redirect to="/" />)
        }
        return (
            <div>
                {this.state.movie && <MovieInfo movie={this.state.movie} />}
                {this.state.dates && <BookingStructure aUserGroup={this.props.aUserGroup} />}
            </div >
        )
    }
}

export default Movie;