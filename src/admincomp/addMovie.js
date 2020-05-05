import React, { Component } from "react";
import axios from "axios";

class addMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            blurb: "",
            price: "",
            imageFile: "",
            imageID: undefined,
        }
    }

    async eventChangeTitle(e) {
        this.setState({ title: e.target.value })
        console.log(this.state)
    }

    async eventChangeBlurb(e) {
        this.setState({ blurb: e.target.value })
        console.log(this.state)
    }

    async eventChangePrice(e) {
        this.setState({ price: e.target.value })
        console.log(this.state)
    }

    async eventChangeImage(e) {
        this.setState({ imageFile: e.target.files[0] })
    }

    async onSubmitHandle(e) {
        e.preventDefault()
        // image upload first

        const data = new FormData();

        data.append("files", this.state.imageFile)

        const res1 = await axios
            .post('http://localhost:1337/upload/', data)
        this.setState({ imageID: res1.data[0].id })
        // add data to movies, dont forget to use the return data for the image
        const res2 = await axios.post('http://localhost:1337/movies/', {
            title: this.state.title,
            description: this.state.blurb,
            price: this.state.price,
            image: [res1.data[0]]
        })
        console.log(res2)
    }

    render() {
        let divtext;
        if (this.state.imageID) {
            divtext = "Filmen har lagts till i databasen"
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
                                <input type="text" name="title" onChange={this.eventChangeTitle.bind(this)}></input>
                            </div>
                            <div>Pris</div>
                            <div className={"addFormInput"}>
                                <input type="number" name="price" onChange={this.eventChangePrice.bind(this)}></input>
                            </div>
                            <div>Bild</div>
                            <div className={"addFormInput"}>
                                <input type="file" name="imageFile" onChange={this.eventChangeImage.bind(this)}></input>
                            </div>
                            <div>Beskrivning</div>
                            <div className={"addFormTextArea"}>
                                <textarea name="blurb" onChange={this.eventChangeBlurb.bind(this)}></textarea>
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

export default addMovie;