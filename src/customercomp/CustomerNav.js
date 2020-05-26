import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../components/FirebaseConfig";


class CustomerNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart_closed: true,
            alreadyBooked: "",
            notEnoughTickets: "",
            message: "",
        }
    }

    componentDidMount() {
        // first check that the items in the cart arent too old
        var d = new Date();
        var currentTime = d.getTime();
        var theCart = JSON.parse(localStorage.getItem('cart'));
        if (theCart) {
            theCart.map((item) => {
                if (((currentTime / 60000) - (item.timestamp / 60000)) > 20) {
                    var index = theCart.indexOf(item);
                    theCart.splice(index, 1);
                    localStorage.setItem("cart", JSON.stringify(theCart));
                    var j = 0;
                    theCart.map(i => {
                        j += 1;
                        return i;
                    })
                    if (j === 0) {
                        localStorage.removeItem("cart");
                    }
                    // dont forget to remove it from reserved
                    firebase.firestore().collection("reservedTickets").get().then(results => {
                        console.log(results)
                    })
                    console.log(item.date)
                    firebase.firestore().collection("reservedTickets").doc(item.date).get().then(result => {
                        console.log(result)
                        if (result.exists) {
                            // this should always exist if there are items in the cart
                            var newAmount = result.data().reserved - item.amount;
                            if (newAmount >= 0) {
                                // we only want to update the amount so we dont screw up other reservations
                                firebase.firestore().collection("reservedTickets").doc(item.date).update({
                                    reserved: newAmount,
                                });
                            } else {
                                //something is wrong, there should be atleast the amount reserved for this cart
                                console.log("warning somethings is wrong, to few reserved tickets")
                            }
                        } else {
                            console.log("warning somethings is wrong")
                        }
                    });
                }
                return item;
            })
        }
        theCart = JSON.parse(localStorage.getItem('cart'));
        if (localStorage.getItem("increase") || localStorage.getItem("decrease")) {
            this.setState({ cart: theCart, cart_closed: false });
            localStorage.removeItem("increase", "decrease")
        } else {
            this.setState({ cart: theCart, cart_closed: true });
        }
    }

    handleOnclickCart = (e) => {
        e.preventDefault();
        this.state.cart_closed ? this.setState({ cart_closed: false, }) : this.setState({ cart_closed: true, });
    }

    handleSubmitCart = (e) => {
        e.preventDefault();
        // handle booking
        //get user
        var user = firebase.auth().currentUser.$.W;
        // get cart
        var cart = JSON.parse(localStorage.getItem('cart'));
        // database ref
        const databaseRef1 = firebase.firestore().collection("bookings");
        const databaseRef2 = firebase.firestore().collection("reservedTickets");
        // get length of array (obs array.length not working)
        var i = 0;
        cart.map(item3 => {
            i += 1;
            return item3;
        })
        //pre declare some variables which are reused
        var k = 0;
        var reload = true;
        var j = 0;
        var ticketsL;
        var newMessage;
        cart.map((item) => {
            var cart2 = JSON.parse(localStorage.getItem('cart'));
            var ticket = {
                date: item.date,
                amount: item.amount
            }
            var theDate = item.date.toString();

            // start by checking that the user doesnt have tickets to this date already

            databaseRef1.doc(user).collection(theDate).doc("tickets").get().then(oldTickets => {
                if (oldTickets.exists) {
                    // there are old tickets, dont book these
                    if (this.state.alreadyBooked === "") {
                        this.setState({ alreadyBooked: item.movie + " den " + item.thedate });
                    } else {
                        if (k === i) {
                            newMessage = this.state.alreadyBooked + " och " + item.movie + " den " + item.thedate;
                            this.setState({ alreadyBooked: newMessage });
                        } else {
                            newMessage = this.state.alreadyBooked + ", " + item.movie + " den " + item.thedate;
                            this.setState({ alreadyBooked: newMessage });
                        }
                    }
                    reload = false;
                } else {
                    //double check that the date still has tickets, just incase

                    databaseRef1.doc(theDate).get().then((res) => {
                        if (res.exists) {
                            if (res.data().ticketsLeft >= item.amount) {
                                //continue with booking
                                databaseRef1.doc(user).collection(theDate).doc("tickets").set(ticket);
                                ticketsL = res.data().ticketsLeft - item.amount;
                                databaseRef1.doc(theDate).set({
                                    ticketsLeft: ticketsL
                                })
                                databaseRef2.doc(item).delete();
                                var test = cart2.indexOf(item);
                                cart2.splice(test, 1);
                                localStorage.setItem("cart", JSON.stringify(cart2));
                                j = 0;
                                cart2.map(item2 => {
                                    j += 1;
                                    return item2;
                                })
                                if (j === 0) {
                                    localStorage.removeItem("cart");
                                    this.setState({ notEnoughTickets: "", alreadyBooked: "" })
                                }
                            } else {
                                //abort, not enough tickets
                                if (this.state.notEnoughTickets === "") {
                                    this.setState({ notEnoughTickets: item.movie + " den " + item.thedate });
                                } else {
                                    if (i === k) {
                                        newMessage = this.state.notEnoughTickets + " och " + item.movie + " den " + item.thedate;
                                        this.setState({ notEnoughTickets: newMessage });
                                    } else {
                                        newMessage = this.state.notEnoughTickets + ", " + item.movie + " den " + item.thedate;
                                        this.setState({ notEnoughTickets: newMessage });
                                    }
                                }
                                reload = false;
                            }
                        } else {
                            // there are no tickets under this date
                            //continue with booking
                            databaseRef1.doc(user).collection(theDate).doc("tickets").set(ticket);
                            ticketsL = parseInt(item.seats) - parseInt(item.amount);
                            databaseRef1.doc(theDate).set({
                                ticketsLeft: ticketsL
                            });
                            databaseRef2.doc(theDate).delete();
                            var test2 = cart2.indexOf(item);
                            cart2.splice(test2, 1);
                            localStorage.setItem("cart", JSON.stringify(cart2));
                            j = 0;
                            cart2.map(item2 => {
                                j += 1;
                                return item2;
                            })
                            if (j === 0) {
                                localStorage.removeItem("cart");
                                this.setState({ notEnoughTickets: "", alreadyBooked: "" });
                            }
                        }
                        return res;
                    })
                }
            })
            k += 1;
            return item;
        });
        // we dont want to load a different page or reload here without a database query as the database queries are async and therefor a reload will always happen even if reload if we do a straight if statement
        firebase.firestore().collection("reservedTickets").get().then((tokeepsync) => {
            if (reload) {
                localStorage.setItem("booked", "yes");
                this.props.history.push("/bookings");
            }
        })
    }

    emptyCart = (e) => {
        e.preventDefault();
        localStorage.removeItem("cart");
    }

    increaseAmount = (e) => {
        e.preventDefault();
        var d = new Date();
        var n = d.getTime();
        var cart = JSON.parse(localStorage.getItem('cart'));
        // database ref
        const databaseRef1 = firebase.firestore().collection("bookings");
        const databaseRef2 = firebase.firestore().collection("reservedTickets");
        var theDate = e.target.value;
        //check if there are any tickets left
        databaseRef1.doc(theDate).get().then((dateStash) => {
            if (dateStash.exists) {
                console.log("checking for tickets")
                var currentAmount = parseInt(dateStash.data().ticketsLeft);
                cart.map(item => {
                    console.log("looping cart")
                    var testDate = parseInt(theDate)
                    if (parseInt(item.date) === testDate) {
                        console.log("dates same")
                        if ((currentAmount - parseInt(item.amount)) > 0 && (parseInt(item.amount) + 1 <= 6)) {
                            console.log("increase item")
                            var newAmount = parseInt(item.amount) + 1;
                            //increase reserved tickets for the date
                            databaseRef2.doc(theDate).update({
                                reserved: newAmount,
                                timeSet: n
                            }).then(function () {
                                //set item + 1 in cart
                                item["amount"] = newAmount;
                                localStorage.setItem("cart", JSON.stringify(cart));
                                localStorage.setItem("increase", "yes");
                                window.location.reload(false);
                                return item;
                            })
                        } else {
                            console.log("stop")
                            if (this.state.message === "") {
                                this.setState({ message: item.movie + " den " + item.thedate })
                                return item;
                            } else {
                                var newMessage = this.state.message + item.movie + " den " + item.thedate;
                                this.setState({ message: newMessage })
                                return item;
                            }
                        }
                    }

                    return item;
                })
            }

            return dateStash;
        })
    }

    decreaseAmount = (e) => {
        e.preventDefault();
        var d = new Date();
        var n = d.getTime();
        var cart = JSON.parse(localStorage.getItem('cart'));
        // database ref
        const databaseRef2 = firebase.firestore().collection("reservedTickets");
        var theDate = e.target.value;
        cart.map(item => {
            try {
                var testDate = parseInt(theDate);
                if (parseInt(item.date) === testDate) {
                    //decrease reserved tickets for the date
                    databaseRef2.doc(theDate).get().then(test => {
                        console.log(test)
                        if (test.exists) {
                            var newAmount = parseInt(item.amount) - 1;
                            if (newAmount > 0) {
                                databaseRef2.doc(theDate).update({
                                    reserved: item.amount - 1,
                                    timeSet: n
                                }).catch((error) => {
                                    console.log(error)
                                    return item;
                                }).then(function () {
                                    //set item - 1 in cart
                                    var index = cart.indexOf(item);
                                    var cart2 = JSON.parse(localStorage.getItem('cart'));
                                    if (newAmount > 0) {
                                        cart2[index]["amount"] = newAmount - 1;
                                        localStorage.setItem("cart", JSON.stringify(cart2));

                                    }
                                    localStorage.setItem("decrease", "yes");
                                    window.location.reload(false);
                                    return item;

                                })
                            } else {
                                databaseRef2.doc(theDate).delete().then(function () {
                                    localStorage.setItem("decrease", "yes");
                                    localStorage.removeItem("cart");
                                    window.location.reload(false);
                                    return item;
                                })
                            }
                        }
                    })


                }

                return item;
            } catch (error) { console.log(error) }
        })

    }

    render() {
        return (

            <nav className={"second-menu"} >
                <ul>
                    <li key={"profile"}>
                        <Link to="/profile">
                            <button className={""}>Profil</button>
                        </Link>
                    </li>
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
                            <ul className={"basket"} >
                                <li key={"cart-content"}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    Film
                                                </th>
                                                <th>
                                                    Datum
                                                </th>
                                                <th>
                                                    Tid
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
                                                        {item.thedate}
                                                    </td>
                                                    <td>
                                                        {item.thetime}
                                                    </td>
                                                    <td>
                                                        {item.salon}
                                                    </td>
                                                    <td>
                                                        <button className={"moreOrLess"} onClick={this.decreaseAmount} value={item.date}>
                                                            -
                                                        </button>{item.amount}<button className={"moreOrLess"} onClick={this.increaseAmount} value={item.date}>
                                                            +
                                                        </button>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </li>
                                <li key={"cart-empty"}>
                                    <button onClick={this.emptyCart}>T;m</button>
                                </li>
                                <li key={"cart-book"}>
                                    <form onSubmit={this.handleSubmitCart}>
                                        <button type={"submit"} onClick={this.handleSubmitCart}>Boka</button>
                                    </form>
                                </li>
                                {this.state.alreadyBooked !== "" &&
                                    <li key={"cart-already-message"}>
                                        Du har redan biljetter till {this.state.alreadyBooked}. Var vänlig och updatera dina bokningar under bokningar istället för att lägga till nya biljetter här.
                                </li>
                                }
                                {this.state.notEnoughTickets !== "" &&
                                    <li key={"cart-not-enough-message"}>
                                        Det finns tyvärr inte tillräkligt med biljetter till {this.state.notEnoughTickets} för din beställning.
                                </li>
                                }
                                {this.state.message !== "" &&
                                    <li key={"cart-message"}>
                                        Det går inte att reservera fler biljetter för bokning till {this.state.message} då det inte finns fler biljetter att tillgå. De du redan har i korgen finns men fler finns inte.
                                </li>
                                }
                            </ul>
                        </li>
                    }

                </ul>
            </nav >

        )
    }
}

export default withRouter(CustomerNav);