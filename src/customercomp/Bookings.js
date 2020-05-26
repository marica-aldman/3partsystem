import React, { Component } from "react";
import axios from "axios";
import firebase from "../components/FirebaseConfig";
import { Redirect } from "react-router-dom";

class Bookings extends Component {

      constructor(props) {
            super(props);
            this.state = {
                  main: true,
            }
      }

      changeBooking = (e) => {
            e.preventDefault();
            var d = new Date();
            var n = d.getTime();
            var item;
            this.state.bookings.map(book => {
                  if (e.target.value === book.date) {
                        item = book;
                  }
            })
            firebase.firestore().collection("bookings").doc(item.date).get().then(result => {
                  //reserve tickets just in case of increasing tickets
                  var theMax = result.data().ticketsLeft;
                  var reservations;
                  firebase.firestore().collection("reservedTickets").doc(item.date).get().then(res1 => {
                        if (res1.exists) {
                              //check timestamp
                              var timeDifferenceInMin = ((n / 60000) - (res1.data().timeSet / 60000))
                              if (timeDifferenceInMin > 20) {
                                    //check max
                                    var newAmount;
                                    if (theMax > 6) {
                                          newAmount = res1.data().reserved + 6;
                                    } else {
                                          newAmount = res1.data().reserved + theMax;
                                    }
                                    reservations = newAmount;
                                    firebase.firestore().collection("reservedTickets").doc(item.date).update({
                                          reserved: newAmount,
                                          timeSet: n,
                                    })
                              } else {
                                    //preivous reservations outdated
                                    var newAmount;
                                    if (theMax > 6) {
                                          newAmount = 6;
                                    } else {
                                          newAmount = theMax;
                                    }
                                    reservations = newAmount;
                                    firebase.firestore().collection("reservedTickets").doc(item.date).update({
                                          reserved: newAmount,
                                          timeSet: n,
                                    })
                              }
                        } else {
                              if (theMax > 6) {
                                    firebase.firestore().collection("reservedTickets").doc(item.date).set({
                                          reserved: 6,
                                          timeSet: n,
                                    })
                                    reservations = 6;
                              } else {
                                    firebase.firestore().collection("reservedTickets").doc(item.date).set({
                                          reserved: theMax,
                                          timeSet: n,
                                    })
                                    reservations = theMax;
                              }
                        }
                  })
                  this.setState({ main: false, alterBooking: item, max: theMax, reserved: reservations });
            })
      }

      submitAlterBooking = (e) => {
            e.preventDefault();
            // values from form
            var newAmount = parseInt(e.target.newAmount.value);
            //user
            var user = firebase.auth().currentUser.$.W;
            // change the booking
            var theDate = this.state.alterBooking.date;
            var theOldAmount = parseInt(this.state.alterBooking.amount);
            //start with setting the date to avoid double booking
            firebase.firestore().collection("bookings").doc(theDate).get().then(dateRes => {
                  if (dateRes.exists) {
                        var currentNr = dateRes.data().ticketsLeft;
                        var toRemove = 0;
                        if (theOldAmount > newAmount) {
                              toRemove = theOldAmount - newAmount;
                        } else if (theOldAmount < newAmount) {
                              toRemove = newAmount - theOldAmount;
                        }
                        var newNR = currentNr - toRemove;
                        if (newNR > 0) {
                              firebase.firestore().collection("bookings").doc(theDate).set({
                                    ticketsLeft: newNR
                              })
                              // change the users tickets
                              firebase.firestore().collection("bookings").doc(user).collection(theDate).doc("tickets").update({
                                    amount: newAmount
                              }).then((test) => {
                                    //time to remove reservations
                                    firebase.firestore().collection("reservedTickets").doc(theDate).get().then((result) => {
                                          if (result.exists) {
                                                var reservations = result.data()
                                                var anAmount = reservations - this.state.reserved;
                                                if (anAmount > 0) {
                                                      firebase.firestore().collection("reservedTickets").doc(theDate).update({
                                                            reserved: anAmount
                                                      })
                                                } else {
                                                      firebase.firestore().collection("reservedTickets").doc(theDate).delete();
                                                      // rerender by setting state
                                                      this.setState({ main: true, alterBooking: null, max: null, reserved: null });
                                                      window.location.reload(false);
                                                }
                                          } else {
                                                // this should never happen
                                                console.log("grave error, someone removed this clients reservation")
                                          }
                                    })
                              })
                        } else {
                              //too many tickets
                              console.log("stop, too many tickets")
                        }
                  } else {
                        //abort major error
                        console.log("abort abort major error")
                  }
            })
      }

      deleteBooking = (e) => {
            // user
            var user = firebase.auth().currentUser.$.W;
            var theDate = e.target.value;
            // get the amount booked
            firebase.firestore().collection("bookings").doc(user).collection(theDate).doc("tickets").get().then(result => {
                  if (result.exists) {
                        var booking = result.data()
                        // return the tickets to stash
                        firebase.firestore().collection("bookings").doc(theDate).get().then(dateStash => {
                              if (dateStash.exists) {
                                    var currentStash = dateStash.data().ticketsLeft;
                                    var newStash = currentStash + booking.amount;
                                    firebase.firestore().collection("bookings").doc(theDate).set({
                                          ticketsLeft: newStash
                                    })
                                    // remove booking from user
                                    firebase.firestore().collection("bookings").doc(user).collection(theDate).doc("tickets").delete().then(function () {
                                          window.location.reload(false);
                                    })
                              } else {
                                    //not good
                                    console.log("there is no stash for this show")
                              }
                        })
                  } else {
                        // this really should exist or you cant click delete
                        console.log("error, no such booking")
                  }
            })
      }

      async componentDidMount() {

            const databaseRef = firebase.firestore().collection("bookings");
            var theBookings = [];
            databaseRef.get().then((res) => {
                  var user = firebase.auth().currentUser.$.W;
                  res.docs.map(doc => {
                        var dateID = doc.id;
                        databaseRef.doc(user).collection(dateID).doc("tickets").get().then(items => {
                              var booking = items.data()
                              if (booking) {
                                    axios.get('http://localhost:1337/dates/' + dateID).then(result => {
                                          booking["movie"] = result.data.movie.title;
                                          booking["salon"] = result.data.salon.Name;
                                          booking["theDate"] = result.data.date;
                                          booking["time"] = result.data.time;
                                          theBookings.push(booking);
                                          this.setState({ bookings: theBookings })
                                    }).catch((error) => {
                                          console.log(error);
                                          console.log("Not good");
                                    })
                              }
                        })
                  })
            })
      }


      render() {
            return (
                  <main>
                        {
                              this.state.main ?
                                    <table>
                                          <thead>
                                                <tr>
                                                      <th>
                                                            Film
                                          </th>
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
                                                            Antal biljetter
                                          </th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {this.state.bookings && this.state.bookings.map((item) =>
                                                      <tr>
                                                            <td>
                                                                  {item.movie}
                                                            </td>
                                                            <td>
                                                                  {item.salon}
                                                            </td>
                                                            <td>
                                                                  {item.theDate}
                                                            </td>
                                                            <td>
                                                                  {item.time}
                                                            </td>
                                                            <td>
                                                                  {item.amount}
                                                            </td>
                                                            <td>
                                                                  <button onClick={this.changeBooking} value={item.date}>Ändra bokning</button>
                                                            </td>
                                                            <td>
                                                                  <button onClick={this.deleteBooking} value={item.date}>Avboka</button>
                                                            </td>
                                                      </tr>
                                                )
                                                }
                                          </tbody>
                                    </table> :
                                    <div>
                                          <form onSubmit={this.submitAlterBooking}>
                                                <table>
                                                      <tbody>
                                                            <tr>
                                                                  <td>
                                                                        Film:
                                                                  </td>
                                                                  <td>
                                                                        {this.state.alterBooking.movie}
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>
                                                                        Salong:
                                                                  </td>
                                                                  <td>
                                                                        {this.state.alterBooking.salon}
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>
                                                                        Datum:
                                                                  </td>
                                                                  <td>
                                                                        {this.state.alterBooking.theDate}
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>
                                                                        Tid:
                                                                  </td>
                                                                  <td>
                                                                        {this.state.alterBooking.time}
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>
                                                                        Antal biljetter:
                                                                  </td>
                                                                  <td>
                                                                        <input type="number" name={"newAmount"} defaultValue={this.state.alterBooking.amount} min={"1"} max={this.state.max > 6 ? 6 : this.state.max}></input>
                                                                        {this.state.max}
                                                                  </td>
                                                            </tr>
                                                      </tbody>
                                                </table>
                                                <div>
                                                      <button type="submit" >Spara</button>
                                                </div>
                                          </form>

                                    </div>
                        }
                  </main>

            )
      }
}

export default Bookings;