import React from "react";


const MovieInfo = (props) => {
    return (
        <div className={"card"} style={{ width: "18rem" }}>
            <div className={"card-wrapper"}>
                <div className={"image_container"}>
                    <img src={"http://localhost:1337" + props.movie.image[0].formats.thumbnail.url} className={"card-img-top"} alt={"Movie"} />
                </div>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>{props.movie.title}</h5>
                    <p className={"card-text"}>{props.movie.description}</p>
                </div>
            </div>
        </div >

    )
}

export default MovieInfo;