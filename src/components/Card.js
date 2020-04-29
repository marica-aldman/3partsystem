import React from "react";
import { Link } from "react-router-dom"
import Movie from "./Movie"


const Card = (props) => {
    return (

        <div className={"card"} style={{ width: "18rem" }}>
            <div className={"card-wrapper"}>
                <div className={"image_container"}>
                    <img src={"http://localhost:1337" + props.data.image[0].formats.thumbnail.url} className={"card-img-top"} alt={"Movie"} />
                </div>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>{props.data.title}</h5>
                    <p className={"card-text"}>{props.data.description}</p>
                    <div className={"button-div"}>
                        <Link to={"/movie/" + props.data.id}><button className={"card-button"} id={props.data.id}>Boka</button></Link>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Card;