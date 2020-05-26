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
        // get all available dates for this movie
        axios
            .get('http://localhost:1337/dates/?movie.id=' + this.props.movie)
            .then((result) => {
                var theDates = result.data
                // remove all dates that have passed
                console.log("Dont forget to remove past dates");
                //firebase connection
                const databaseRef = firebase.firestore()
                // check how many are reserved and booked for each date so we can see how many are left
                theDates.map(date => {
                    //reserved
                    var nrReserved = 0;
                    databaseRef.collection("reservedTickets").doc(date.id.toString()).get().then((res) => {
                        if (res.exists) {
                            if (Array.isArray(res)) {
                                if (res.length() > 1) {
                                    var i = 0;
                                    while (i < (res.length - 1)) {
                                        console.log(i);
                                        console.log(res[i])
                                        /* if (nrReserved > 0 && nrReserved !== res[i].ticketsLeft) {
                                            if (nrReserved > res[i].ticketsLeft) {
        
                                            } else {
                                                nrReserved = res[i].ticketsLeft;
                                            }
                                        }
                                        nrReserved = allReserved + res[i].reserved; */
                                        console.log(res[i]);
                                        i += 1;
                                    }
                                    //date.TicketsLeft = date.TicketsLeft - allReserved;
                                } else {
                                    console.log("only one");
                                    console.log(res);
                                    console.log(res.data());
                                }
                            } else {
                                var ticket = res.data();
                                var ticketTime = ticket.timeSet;
                                var d = new Date();
                                var timestamp = d.getTime();
                                var timeDifferenceInMin = ((timestamp / 60000) - (ticketTime / 60000))
                                if (timeDifferenceInMin > 20) {
                                    console.log("less than 20 min");
                                    nrReserved = ticket.reserved;
                                    console.log(nrReserved)
                                } else {
                                    console.log("more than 20 min");
                                }
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
                    }).catch((error) => {
                        console.log(error);
                    })
                    date.TicketsLeft = date.salon.seats - (nrReserved + nrBooked);
                    this.setState({ updatingState: true });
                    return (date);
                })
                this.setState({ dates: theDates });
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
            <div className={"card"} style={{ width: "18rem" }}>
                <div>
                    {this.state.message}
                </div>
                <div className={"card-wrapper"}>
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
                                    Biljetter kvar
                                </th>
                                <th>
                                    Biljetter önskade
                                </th>
                                <th>
                                    &nbsp;
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
                                                        Lägg i varukorg
                                                    </button>
                                                    :
                                                    <button type="submit" disabled>
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
            </div >
        )
    }

}


export default BookingStructure;

//{this.props.aUserGroup != 'Authenticated' ? 'disabled' : ''}