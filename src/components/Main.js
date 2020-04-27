import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:1337/movies')
            .then((res) => {
                return (
                    this.setState({ movies: res.data })
                )
            })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                {this.state.movies.map((movie) => {
                    return (<Card data={movie} onSubmitHandler={this.onSubmitHandler} />)
                })}
            </div>
        );
    }

}

export default Main;