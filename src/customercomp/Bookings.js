import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Bookings extends Component {

      constructor(props) {
            super(props);

            this.state = {
            }
      }

      getBookings = () => {
            // load the bookings
      }

      componentDidMount() {
            var allOfThem = [];
            axios.get('http://localhost:1337/tickets/?user=' + this.props.aUser).then((res) => {
                  res.data.map((ticket) => {
                        var theMovie = undefined;
                        var theDate = undefined;
                        axios.get('http://localhost:1337/movies/?id=' + ticket.moviedate.movie).then((mres) => {
                              theMovie = mres.data

                              axios.get('http://localhost:1337/dates/?id=' + ticket.moviedate.date).then((dres) => {
                                    theDate = dres.data
                                    allOfThem.push({ ticketID: ticket.id, numberOfTickets: ticket.NOTickets, moviedateID: ticket.category, movie: theMovie, date: theDate, salon: theDate[0].salons[0] })
                              })
                        })
                        return (ticket)
                  })
            })

            this.setState({ tickets: allOfThem })
      }

      render() {
            if (this.props.aUserGroup != 'Authenticated') {
                  return (<Redirect to="/" />)
            }
            return (
                  <main>
                        <table>
                              <thead>
                                    <tr>
                                          <th>
                                                TicketID
                                          </th>
                                          <th>
                                                Movie
                                          </th>
                                          <th>
                                                Salon
                                          </th>
                                          <th>
                                                Date
                                          </th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {this.state.tickets && this.state.tickets.map((ticket) =>
                                          <tr>
                                                <td>
                                                      {ticket.ticketID}
                                                </td>
                                                <td>
                                                      {ticket.movie[0].title}
                                                </td>
                                                <td>
                                                      {ticket.salon.salon}
                                                </td>
                                                <td>
                                                      {ticket.date[0].date}
                                                </td>
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                          </tr>
                                    )
                                    }
                              </tbody>
                        </table>
                  </main>
            )
      }
}

export default Bookings;