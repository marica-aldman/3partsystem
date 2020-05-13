import React, { Component } from "react";

class BookingStructure extends Component {

    handleBooking = (e) => {
        e.preventDefault();
        // get local storage
        var cart = [];
        var item = undefined;
        if (localStorage.getItem('cart')) {
            //add to cart
            cart = JSON.parse(localStorage.getItem('cart'));
            item = { 'date': e.target.dateID.value, 'amount': e.target.amount.value, }
            cart.append(item);
        } else {
            //construct cart
            item = { 'date': e.target.dateID.value, 'amount': e.target.amount.value, }
            cart.append(item);
        }
        // set local storage
        localStorage.setItem('cart', JSON.stringify(cart))
    }


    render() {
        return (
            <div className={"card"} style={{ width: "18rem" }}>
                {this.props.moviedates}
                <div className={"card-wrapper"}>
                    {this.state.dates.map((date) =>
                        <form onSubmit={this.handleBooking.bind(this)}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            {date.movie.title}
                                        </td>
                                        <td>
                                            {date.salon.name}
                                        </td>
                                        <td>
                                            <input type={"hidden"} name={"date"} value={date.id} />
                                            {date.date}
                                        </td>
                                        <td>
                                            {date.time}
                                        </td>
                                        <td>
                                            {date.TicketsLeft}
                                        </td>
                                        <td>
                                            <input type={'number'} name={"amount"} max={date.TicketsLeft} />
                                        </td>
                                        <td>
                                            {
                                                this.props.aUserGroup === 'Authenticated' ?
                                                    <button onClick={this.handleBooking.bind(this)} >
                                                        Lägg i varukorg
                                                    </button>
                                                    :
                                                    <button onClick={this.handleBooking.bind(this)} disabled>
                                                        Lägg i varukorg
                                                    </button>
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    )}
                </div>
            </div>
        )
    }

}


export default BookingStructure;

//{this.props.aUserGroup != 'Authenticated' ? 'disabled' : ''}