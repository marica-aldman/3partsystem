import React, { Component } from "react";
import { withRouter } from "react-router-dom"


class Card extends Component {

    setIDForMovie = (e) => {
        e.preventDefault()
        this.props.doChangeMovie(this.props.data.id);
        this.props.history.push("/movie")
    }

    render() {
        return (

            <div className={"card"} style={{ width: "18rem" }}>
                <div className={"card-wrapper"}>
                    <div className={"image_container"}>
                        <img src={"http://localhost:1337" + this.props.data.image[0].formats.thumbnail.url} className={"card-img-top"} alt={"Movie"} />
                    </div>
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>{this.props.data.title}</h5>
                        <p className={"card-text"}>{this.props.data.description}</p>
                        <div className={"button-div"}>
                            <button className={"card-button"} id={this.props.data.title} name={this.props.data.id} onClick={this.setIDForMovie}>Boka</button>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default withRouter(Card);