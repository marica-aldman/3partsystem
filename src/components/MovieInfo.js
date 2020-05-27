import React from "react";


const MovieInfo = (props) => {
    return (
        <div className={"card-style2"} style={{ width: "18rem" }}>
            <div className={"card-style2-wrapper"}>
                <div className={"card-style2-image_container"}>
                    <img src={"http://localhost:1337" + props.movie.image[0].formats.thumbnail.url} className={"card-style2-img-top"} alt={"Movie"} />
                </div>
                <div className={"card-style2-body"}>
                    <h5 className={"card-style2-title"}>{props.movie.title}</h5>
                    <p className={"card-style2-text"}>{props.movie.description}</p>
                </div>
            </div>
        </div >

    )
}

export default MovieInfo;