import React, { Component } from "react";
import axios from "axios";
import firebase from "../components/FirebaseConfig";

class BookingStructure extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ""
        }
    }


    componentDidMount() {
        // get windowsize
        const windowWidth = window.innerWidth
        // get all available dates for this movie
        axios
            .get('http://localhost:1337/dates/?movie.id=' + this.props.movie)
            .then((result) => {
                var theDates = result.data
                //firebase connection
                const databaseRef = firebase.firestore()
                // check how many are reserved and booked for each date so we can see how many are left
                theDates.map(date => {
                    //reserved
                    var nrReserved = 0;
                    databaseRef.collection("reservedTickets").doc(date.id.toString()).get().then((res) => {
                        if (res.exists) {
                            var ticket = res.data();
                            var ticketTime = ticket.timeSet;
                            var d = new Date();
                            var timestamp = d.getTime();
                            var timeDifferenceInMin = ((timestamp / 60000) - (ticketTime / 60000))
                            if (timeDifferenceInMin < 20) {
                                //less than 20 min
                                nrReserved = ticket.reserved;
                            } else {
                                //more than 20 min
                                nrReserved = 0;
                                databaseRef.collection("reservedTickets").doc(date.id.toString()).delete();
                            }
                        }
                    }).catch((error) => {
                        console.log(error);
                    })
                    //booked
                    var nrBooked = 0;
                    databaseRef.collection("bookings").doc(date.id.toString()).get().then((res2) => {
                        if (res2.exists) {
                            nrBooked = res2.data().ticketsLeft
                        }
                        date.TicketsLeft = nrBooked - nrReserved;
                        this.setState({ updatingState: true });
                        return (date);
                    }).catch((error) => {
                        console.log(error);
                    })
                })
                this.setState({ dates: theDates, windowSize: windowWidth });
            });
    }


    handleBooking = (e) => {
        e.preventDefault();
        var user = firebase.auth().currentUser.$.W;
        var date = e.target.date.value;
        var amount = e.target.amount.value;
        var seats = e.target.seats.value;
        var movie = e.target.movie.value;
        var thedate = e.target.theDate.value;
        var thetime = e.target.thetime.value;
        var salon = e.target.salon.value;
        var d = new Date();
        var n = d.getTime();
        // check we dont have this booked first
        firebase.firestore().collection("bookings").doc(user).collection(date).doc("tickets").get().then(result1 => {
            if (result1.exists) {
                //there are bookings
                var newMessage = "Du har redan bokningar på denna visning(" + thedate + "). Du kan inte boka fler gånger på samma visning. Om du vill öka eller minska antalet biljetter updatera din bokning under 'mina bokningar'."
                this.setState({ message: newMessage })
            } else {
                // reserve the tickets in firebase
                firebase.firestore().collection("reservedTickets").doc(date).get().then(result => {
                    if (result.exists) {
                        //check the timestamp
                        var reservedTickets = result.data();
                        var timeDifferenceInMin = ((n / 60000) - (reservedTickets.timeSet / 60000))
                        if (timeDifferenceInMin > 20) {
                            // no one has reserved tickets to this date in the past 20 min overwrite it
                            firebase.firestore().collection("reservedTickets").doc(date).set({
                                reserved: amount,
                                timeSet: n,
                            }).then(function () {
                                // get local storage
                                var cart = [];
                                var item = undefined;
                                if (localStorage.getItem('cart')) {
                                    //get cart
                                    cart = JSON.parse(localStorage.getItem('cart'));
                                    // check this
                                    // check for doubles in cart
                                    var double = false;
                                    cart.map(anItem => {
                                        if (anItem.date === date) {
                                            // we already have this one, update amount instead
                                            double = true;
                                            anItem.amount = parseInt(anItem.amount) + parseInt(amount);
                                            return anItem;
                                        }
                                    })
                                    if (!double) {
                                        //add to cart
                                        item = { 'date': date, 'amount': amount, 'seats': seats, "movie": movie, "thedate": thedate, "salon": salon, "timestamp": n }
                                        cart.push(item);
                                    }
                                } else {
                                    //construct cart
                                    item = { 'date': date, 'amount': amount, 'seats': seats, "movie": movie, "thedate": thedate, "thetime": thetime, "salon": salon, "timestamp": n }
                                    cart.push(item);
                                }
                                // set local storage
                                localStorage.setItem('cart', JSON.stringify(cart));
                                // reload to update cart
                                window.location.reload(false);
                            })
                        } else {
                            var newAmount = parseInt(reservedTickets.reserved) + parseInt(amount);
                            firebase.firestore().collection("reservedTickets").doc(date).update({
                                reserved: newAmount,
                                timeSet: n,
                            }).then(function () {

                                // get local storage
                                var cart = [];
                                var item = undefined;
                                if (localStorage.getItem('cart')) {
                                    //get cart
                                    cart = JSON.parse(localStorage.getItem('cart'));
                                    // check this
                                    // check for doubles in cart
                                    var double = false;
                                    cart.map(anItem => {
                                        if (anItem.date === date) {
                                            // we already have this one, update amount instead
                                            double = true;
                                            anItem.amount = parseInt(anItem.amount) + parseInt(amount);
                                            return anItem;
                                        }
                                    })
                                    if (!double) {
                                        //add to cart
                                        item = { 'date': date, 'amount': amount, 'seats': seats, "movie": movie, "thedate": thedate, "salon": salon, "timestamp": n }
                                        cart.push(item);
                                    }
                                } else {
                                    //construct cart
                                    item = { 'date': date, 'amount': amount, 'seats': seats, "movie": movie, "thedate": thedate, "thetime": thetime, "salon": salon, "timestamp": n }
                                    cart.push(item);
                                }
                                // set local storage
                                localStorage.setItem('cart', JSON.stringify(cart));
                                // reload to update cart
                                window.location.reload(false);

                            })
                        }
                    } else {
                        // no reservations make a new one
                        firebase.firestore().collection("reservedTickets").doc(date).set({
                            reserved: amount,
                            timeSet: n,
                        }).then(function () {
                            // get local storage
                            var cart = [];
                            var item = undefined;
                            if (localStorage.getItem('cart')) {
                                //get cart
                                cart = JSON.parse(localStorage.getItem('cart'));
                                // check this
                                // check for doubles in cart
                                var double = false;
                                cart.map(anItem => {
                                    if (anItem.date === date) {
                                        // we already have this one, update amount instead
                                        double = true;
                                        anItem.amount = parseInt(anItem.amount) + parseInt(amount);
                                        return anItem;
                                    }
                                })
                                if (!double) {
                                    //add to cart
                                    item = { 'date': date, 'amount': amount, 'seats': seats, "movie": movie, "thedate": thedate, "salon": salon, "timestamp": n }
                                    cart.push(item);
                                }
                            } else {
                                //construct cart
                                item = { 'date': date, 'amount': amount, 'seats': seats, "movie": movie, "thedate": thedate, "thetime": thetime, "salon": salon, "timestamp": n }
                                cart.push(item);
                            }
                            // set local storage
                            localStorage.setItem('cart', JSON.stringify(cart));
                            // reload to update cart
                            window.location.reload(false);
                        })
                    }
                });
            }
        })
    }


    render() {
        return (
            <div>
                {this.state.windowSize > 600 ? <div className={"card-style1"}>
                    <div>
                        {this.state.message}
                    </div>
                    <div className={"card-style1-wrapper"}>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Salong
                                </th>
                                    <th>
                                        Datum
                                </th>
                                    <th>
                                        Tid
                                </th>
                                    <th>
                                        Biljetter kvar
                                </th>
                                    <th>
                                        Biljetter önskade
                                </th>
                                    <th>
                                        Boka
                                </th>
                                </tr>
                            </thead>
                        </table>
                        {this.state.dates && this.state.dates.map((date) =>
                            <form onSubmit={this.handleBooking} key={date.id}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type={"hidden"} name={"salon"} value={date.salon.Name} />
                                                {date.salon.Name}
                                            </td>
                                            <td>
                                                <input type={"hidden"} name={"date"} value={date.id} />
                                                {date.date}
                                            </td>
                                            <td>
                                                <input type={"hidden"} name={"theDate"} value={date.date} />
                                                {date.time === "17:00:00.000" ? "17.00" : date.time === "19:30:00.000" ? "19.30" : (date.time === "22:00:00.000") && "22.00"}
                                                {date.time === "17:00:00.000" ? <input type={"hidden"} name={"thetime"} value={"17.00"} /> : date.time === "19:30:00.000" ? <input type={"hidden"} name={"thetime"} value={"19.30"} /> : (date.time === "22:00:00.000") && <input type={"hidden"} name={"thetime"} value={"22.00"} />}
                                            </td>
                                            <td>
                                                <input type={"hidden"} name={"seats"} value={date.salon.seats} />
                                                {date.TicketsLeft}
                                            </td>
                                            <td>
                                                <input type={'number'} name={"amount"} max={date.TicketsLeft > 6 ? "6" : date.TicketsLeft} min="1" defaultValue="1" />
                                            </td>
                                            <td>
                                                <input type={"hidden"} name={"movie"} value={date.movie.title} />
                                                {
                                                    (firebase.auth().currentUser || localStorage.getItem('firebaseui::rememberedAccounts')) ?
                                                        <button type="submit" >
                                                            <i className={"fas fa-shopping-basket"}></i>
                                                        </button>
                                                        :
                                                        <button type="submit" disabled>
                                                            <i className={"fas fa-shopping-basket"}></i>
                                                        </button>
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        )}
                    </div>
                </div >
                    :
                    <div className={"card-style1"} style={{ width: "18rem" }}>
                        <div>
                            {this.state.message}
                        </div>
                        <div className={"card-style1-wrapper"}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Salong
                                </th>
                                        <th>
                                            Datum
                                </th>
                                        <th>
                                            Tid
                                </th>
                                        <th>
                                            Biljetter kvar
                                </th>
                                        <th>
                                            Biljetter önskade
                                </th>
                                        <th>
                                            Boka
                                </th>
                                    </tr>
                                </thead>
                            </table>
                            {this.state.dates && this.state.dates.map((date) =>
                                <form onSubmit={this.handleBooking} key={date.id}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input type={"hidden"} name={"salon"} value={date.salon.Name} />
                                                    {date.salon.Name}
                                                </td>
                                                <td>
                                                    <input type={"hidden"} name={"date"} value={date.id} />
                                                    {date.date}
                                                </td>
                                                <td>
                                                    <input type={"hidden"} name={"theDate"} value={date.date} />
                                                    {date.time === "17:00:00.000" ? "17.00" : date.time === "19:30:00.000" ? "19.30" : (date.time === "22:00:00.000") && "22.00"}
                                                    {date.time === "17:00:00.000" ? <input type={"hidden"} name={"thetime"} value={"17.00"} /> : date.time === "19:30:00.000" ? <input type={"hidden"} name={"thetime"} value={"19.30"} /> : (date.time === "22:00:00.000") && <input type={"hidden"} name={"thetime"} value={"22.00"} />}
                                                </td>
                                                <td>
                                                    <input type={"hidden"} name={"seats"} value={date.salon.seats} />
                                                    {date.TicketsLeft}
                                                </td>
                                                <td>
                                                    <input type={'number'} name={"amount"} max={date.TicketsLeft > 6 ? "6" : date.TicketsLeft} min="1" defaultValue="1" />
                                                </td>
                                                <td>
                                                    <input type={"hidden"} name={"movie"} value={date.movie.title} />
                                                    {
                                                        (firebase.auth().currentUser || localStorage.getItem('firebaseui::rememberedAccounts')) ?
                                                            <button type="submit" >
                                                                <i className={"fas fa-shopping-basket"}></i>
                                                            </button>
                                                            :
                                                            <button type="submit" disabled>
                                                                <i className={"fas fa-shopping-basket"}></i>
                                                            </button>
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                            )}
                        </div>
                    </div >
                }
            </div>
        )
    }

}


export default BookingStructure;
