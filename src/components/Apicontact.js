import React, { Component } from "react";
import axios from "axios";

class Apicontact extends Component {

    state = { APIData_title: "" }

    onClickFunction() {
        axios
            .get('http://localhost:1337/movies')
            .then((res) => {
                console.log(res)
                this.setState({ APIData: res.data[0].title })
                //this.setState({APIData_image: res.data.})
            })
    }
    render() {
        return (
            <div>
                <button onClick={this.onClickFunction.bind(this)}>Hämta</button>
                <div>
                    <div>{this.state.APIData_title}</div>
                </div>
            </div>
        )
    }

}

export default Apicontact;