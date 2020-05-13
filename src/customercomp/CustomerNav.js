import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class CustomerNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart_closed: true,
        }
    }

    componentDidMount() {
        this.setState({ cart: JSON.parse(localStorage.getItem('cart')) });
    }

    handleOnclickCart = (e) => {
        e.preventDefault();
        this.state.cart_closed ? this.setState({ cart_closed: false, }) : this.setState({ cart_closed: true, });
    }

    handleSubmitCart = (e) => {
        e.preventDefault();
        // handle booking
        //get user
        console.log(this.props.aUser)
        // dont forget authentication later
        // get cart
        var cart = JSON.parse(localStorage.getItem('cart'));
        cart.map((item) => {
            var ticket = { 'moviedate': item.moviedate, 'NOTickets': item.amount, 'ref': item.moviedate + "-" + this.props.aUser, 'category': item.moviedate, 'user': this.props.aUser }
            axios
                .post("http://localhost:1337/tickets/", ticket)
                .then(responce => {
                    console.log(responce)
                })
            return (item)
        })
        // clear cart
        localStorage.clear();
    }

    render() {
        return (

            <nav className={"second-menu"} >
                <ul>
                    <li key={"bookings"}>
                        <Link to="/bookings">
                            <button className={""}>Bokningar</button>
                        </Link>
                    </li>
                    {this.state.cart_closed ?
                        <li key={"closed-cart"}>
                            <form onSubmit={this.handleOnclickCart}>
                                <button className={""} onClick={this.handleOnclickCart} >Kundvagn</button>
                            </form>
                        </li>
                        :
                        <li key={"open-cart"}>
                            <form onSubmit={this.handleOnclickLogin}>
                                <button className={""} onClick={this.handleOnclickCart} >Kundvagn</button>
                            </form>
                            <ul>
                                <li key={"cart-content"}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Film
                                                </th>
                                                <th>
                                                    Datum och Tid
                                                </th>
                                                <th>
                                                    Salong
                                                </th>
                                                <th>
                                                    Biljetter
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.cart && this.state.cart.map((item) =>
                                                <tr>
                                                    <td>
                                                        {item.movie}
                                                    </td>
                                                    <td>
                                                        {item.date}
                                                    </td>
                                                    <td>
                                                        {item.salon}
                                                    </td>
                                                    <td>
                                                        {item.amount}
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </li>
                                <li key={"cart-submit"}>
                                    <form onSubmit={this.handleSubmitCart}>
                                        <button type={"submit"} onClick={this.handleSubmitCart}>Boka</button>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    }

                </ul>
            </nav >

        )
    }
}

export default CustomerNav;