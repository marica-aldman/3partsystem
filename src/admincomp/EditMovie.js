import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

class EditMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: null || JSON.parse(localStorage.getItem('changeMovie')),
            title: "",
            blurb: "",
            price: "",
            imageFile: "",
            imageID: undefined,
        }
    }

    componentDidMount() {
        this.setState({ title: this.state.movie[0].title, price: this.state.movie[0].price, description: this.state.movie[0].description })
    }

    async eventChangeTitle(e) {
        this.setState({ title: e.target.value })
    }

    async eventChangeBlurb(e) {
        this.setState({ description: e.target.value })
    }

    async eventChangePrice(e) {
        this.setState({ price: e.target.value })
    }

    async eventChangeImage(e) {
        this.setState({ imageFile: e.target.files[0] })
    }

    async onSubmitHandle(e) {
        e.preventDefault();
        console.log(e);
        console.log(this.state);
        // image upload first

        const data = new FormData();
        var res = undefined;
        if (this.state.imageFile) {
            data.append("files", this.state.imageFile)

            res = await axios
                .post('http://localhost:1337/upload/', data)
            this.setState({ imageID: res.data[0].id })

            // add data to movies, dont forget to use the return data for the image
            axios.put('http://localhost:1337/movies/' + this.state.movie[0].id, {
                title: this.state.title,
                description: this.state.description,
                price: this.state.price,
                image: [res.data[0]]
            }).then((res) => {
                this.props.history.push("/mod/movies")

            })
        } else {
            this.setState({ imageID: "No image upload" })

            // add data to movies, dont forget to use the return data for the image
            axios.put('http://localhost:1337/movies/' + this.state.movie[0].id, {
                title: this.state.title,
                description: this.state.description,
                price: this.state.price,
            }).then((res) => {
                localStorage.removeItem('changeMovie');
                this.props.history.push("/mod/movies")
            })
        }
    }

    render() {

        if (this.props.aUserGroup != "admin") {
            return (<Redirect to="/" />)
        }
        let divtext;
        if (this.state.imageID) {
            divtext = "Filmen har korrigerats till i databasen"
        } else {
            divtext = ""
        }
        return (
            <div className={"addFormMain"}>
                <div className={"addFormWrapper"}>
                    <div className={"addFormText"}>
                        {divtext}
                    </div>
                    <div className={"addFormContainer"}>
                        <form className={"addForm"} onSubmit={this.onSubmitHandle.bind(this)}>
                            <div>Titel</div>
                            <div className={"addFormInput"}>
                                <input type="text" name="title" onChange={this.eventChangeTitle.bind(this)} defaultValue={this.state.movie[0].title}></input>
                            </div>
                            <div>Pris</div>
                            <div className={"addFormInput"}>
                                <input type="number" name="price" onChange={this.eventChangePrice.bind(this)} defaultValue={this.state.movie[0].price}></input>
                            </div>
                            <div>Bild</div>
                            <div className={"addFormInput"}>
                                <img src={"http://localhost:1337" + this.state.movie[0].image[0].formats.thumbnail.url} className={"mini-pic"} />
                                <input type="file" name="imageFile" onChange={this.eventChangeImage.bind(this)}></input>
                            </div>
                            <div>Beskrivning</div>
                            <div className={"addFormTextArea"}>
                                <textarea name="blurb" onChange={this.eventChangeBlurb.bind(this)} defaultValue={this.state.movie[0].description}></textarea>
                            </div>
                            <div className={"addFormButtonDiv"}>
                                <button type="submit" className={"addFormButton"}>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(EditMovie);