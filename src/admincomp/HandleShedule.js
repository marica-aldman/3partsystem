import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter } from "react-router-dom";

class HandleShedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    async componentDidMount() {
        //get all the necessary data
        const res1 = await axios.get('http://localhost:1337/movies/')
        const amovie = await axios.get('http://localhost:1337/movies/1')
        const res2 = await axios.get('http://localhost:1337/salons/')
        const res3 = await axios.get('http://localhost:1337/dates/')
        const aSalon = await axios.get('http://localhost:1337/salons/?id=1')
        this.setState({ movies: res1.data, salons: res2.data, dates: res3.data, salon: aSalon.data[0], mon17: amovie.data, mon19: amovie.data, mon22: amovie.data, tue17: amovie.data, wed19: amovie.data, wed22: amovie.data, thu17: amovie.data, thu19: amovie.data, thu22: amovie.data, fri17: amovie.data, fri19: amovie.data, fri22: amovie.data, sat17: amovie.data, sat19: amovie.data, sat22: amovie.data, sun17: amovie.data, sun19: amovie.data, sun22: amovie.data })
    }

    handleSalon(e) {
        axios.get('http://localhost:1337/salons/?id=' + e.target.value).then((theSalon) => {
            this.setState({ salon: theSalon.data[0] })
        })
    }

    handleMon17 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ mon17: result.data[0] })
        })
    }

    handleMon19 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ mon19: result.data[0] })
        })
    }

    handleMon22 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ mon22: result.data[0] })
        })
    }

    handleTue17 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ tue17: result.data[0] })
        })
    }

    handleTue19 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ tue19: result.data[0] })
        })
    }

    handleTue22 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ tue22: result.data[0] })
        })
    }

    handleWed17 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ wed17: result.data[0] })
        })
    }

    handleWed19 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ wed19: result.data[0] })
        })
    }

    handleWed22 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ wed22: result.data[0] })
        })
    }

    handleThu17 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ thu17: result.data[0] })
        })
    }

    handleThu19 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ thu19: result.data[0] })
        })
    }

    handleThu22 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ thu22: result.data[0] })
        })
    }

    handleFri17 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ fri17: result.data[0] })
        })
    }

    handleFri19 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ fri19: result.data[0] })
        })
    }

    handleFri22 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ fri22: result.data[0] })
        })
    }

    handleSat17 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ sat17: result.data[0] })
        })
    }

    handleSat19 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ sat19: result.data[0] })
        })
    }

    handleSat22 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ sat22: result.data[0] })
        })
    }

    handleSun17 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ sun17: result.data[0] })
        })
    }

    handleSun19 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ sun19: result.data[0] })
        })
    }

    handleSun22 = (e) => {
        axios.get('http://localhost:1337/movies/?id=' + e.target.value).then((result) => {
            this.setState({ sun22: result.data[0] })
        })
    }

    calculateWeek(lastDate) {
        var weekDay = new Date();
        var thisYear = new Date();
        var thisMonth = new Date();
        var thisDay = new Date();
        var endOfMonth = false;
        var monthCase = 0;
        var leap = false;

        if (lastDate) {
            var theDate = lastDate.split("-");
            thisYear = parseInt(theDate[0]);
            thisMonth = parseInt(theDate[1]);
            thisDay = parseInt(theDate[2]);
            weekDay = 0;
        } else {
            weekDay = weekDay.getDay()
            thisYear = thisYear.getFullYear();
            thisMonth = thisMonth.getMonth() + 1;
            thisDay = thisDay.getDate();
        }

        var monday = "";
        var tuesday = "";
        var wednesday = "";
        var thursday = "";
        var friday = "";
        var saturday = "";
        var sunday = "";
        var extra1 = "";
        var extra2 = "";


        // next week starting mondays
        switch (weekDay) {
            case 0:
                //sunday
                // monday is today + 1
                endOfMonth = false;
                monthCase = 0;
                leap = false;

                if (thisMonth === 1 || thisMonth === 3 || thisMonth === 5 || thisMonth === 7 || thisMonth === 8 || thisMonth === 10 || thisMonth === 12) {
                    if (thisDay > 24) {
                        endOfMonth = true;
                        monthCase = 1;
                    }
                } else if (thisMonth === 2) {
                    if ((thisYear % 100 ? thisYear % 400 : thisYear % 4)) {
                        leap = true;
                    }
                    if (leap && thisDay > 22) {
                        endOfMonth = true;
                        monthCase = 2;
                    } else if (thisDay > 21) {
                        endOfMonth = true;
                        monthCase = 2;
                    }
                } else {
                    if (thisDay > 23) {
                        endOfMonth = true;
                        monthCase = 3;
                    }
                }
                extra1 = "";
                extra2 = "";
                thisMonth < 10 ? extra1 = "0" : extra1 = "";
                thisDay < 10 ? extra2 = "0" : extra2 = "";
                if (endOfMonth) {
                    switch (monthCase) {
                        case 1:
                            switch (thisDay) {
                                case 25:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 26:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 27:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 28:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 29:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 30:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 31:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 2:
                            if (leap) {
                                switch (thisDay) {
                                    case 23:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 24:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 25:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 26:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 27:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 28:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 29:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                switch (thisDay) {
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 23:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 24:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 25:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 26:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 27:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    default:
                                        break;
                                }
                            }

                            break;

                        case 3:
                            switch (thisDay) {
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 25:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 26:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 27:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 28:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 29:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 7);
                }
                break;
            case 1:
                //monday
                // monday is today + 7
                endOfMonth = false;
                monthCase = 0;
                leap = false;

                if (thisMonth === 1 || thisMonth === 3 || thisMonth === 5 || thisMonth === 7 || thisMonth === 8 || thisMonth === 10 || thisMonth === 12) {
                    if (thisDay > 18) {
                        endOfMonth = true;
                        monthCase = 1;
                    }
                } else if (thisMonth === 2) {
                    if ((thisYear % 100 ? thisYear % 400 : thisYear % 4)) {
                        leap = true;
                    }
                    if (leap && thisDay > 16) {
                        endOfMonth = true;
                        monthCase = 2;
                    } else if (thisDay > 15) {
                        endOfMonth = true;
                        monthCase = 2;
                    }
                } else {
                    if (thisDay > 17) {
                        endOfMonth = true;
                        monthCase = 3;
                    }
                }
                extra1 = "";
                extra2 = "";
                thisMonth < 10 ? extra1 = "0" : extra1 = "";
                thisDay < 10 ? extra2 = "0" : extra2 = "";
                if (endOfMonth) {
                    switch (monthCase) {
                        case 1:
                            switch (thisDay) {
                                case 19:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 20:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 21:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 22:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 23:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 25:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 26:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                case 27:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    break;
                                case 28:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    break;
                                case 29:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                    break;
                                case 31:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 13;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 2:
                            if (leap) {
                                switch (thisDay) {
                                    case 17:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 18:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 19:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 20:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 21:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 23:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 24:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    case 25:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        break;
                                    case 26:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        break;
                                    case 27:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                        break;
                                    case 29:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 13;
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                switch (thisDay) {
                                    case 16:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 17:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 18:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 19:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 20:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 21:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 22:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 23:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    case 24:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        break;
                                    case 25:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        break;
                                    case 26:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        break;
                                    case 27:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 13;
                                        break;
                                    default:
                                        break;
                                }
                            }

                            break;

                        case 3:
                            switch (thisDay) {
                                case 18:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 19:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 20:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 21:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 22:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 23:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 24:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 25:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                case 26:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    break;
                                case 27:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    break;
                                case 28:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    break;
                                case 29:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 13;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 7);
                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 8);
                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 9);
                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 10);
                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 11);
                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 12);
                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 13);
                }
                break;
            case 2:
                //tuesday
                // monday is today + 6
                endOfMonth = false;
                monthCase = 0;
                leap = false;

                if (thisMonth === 1 || thisMonth === 3 || thisMonth === 5 || thisMonth === 7 || thisMonth === 8 || thisMonth === 10 || thisMonth === 12) {
                    if (thisDay > 19) {
                        endOfMonth = true;
                        monthCase = 1;
                    }
                } else if (thisMonth === 2) {
                    if ((thisYear % 100 ? thisYear % 400 : thisYear % 4)) {
                        leap = true;
                    }
                    if (leap && thisDay > 17) {
                        endOfMonth = true;
                        monthCase = 2;
                    } else if (thisDay > 16) {
                        endOfMonth = true;
                        monthCase = 2;
                    }
                } else {
                    if (thisDay > 18) {
                        endOfMonth = true;
                        monthCase = 3;
                    }
                }
                extra1 = "";
                extra2 = "";
                thisMonth < 10 ? extra1 = "0" : extra1 = "";
                thisDay < 10 ? extra2 = "0" : extra2 = "";
                if (endOfMonth) {
                    switch (monthCase) {
                        case 1:
                            switch (thisDay) {
                                case 20:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 21:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 22:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 23:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 25:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 26:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 27:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                case 28:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    break;
                                case 29:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    break;
                                case 31:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 2:
                            if (leap) {
                                switch (thisDay) {
                                    case 18:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 19:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 20:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 21:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 23:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 24:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 25:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    case 26:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        break;
                                    case 27:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        break;
                                    case 29:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                switch (thisDay) {
                                    case 17:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 18:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 19:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 20:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 21:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 23:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 24:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    case 25:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        break;
                                    case 26:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        break;
                                    case 27:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                        break;
                                    default:
                                        break;
                                }
                            }

                            break;

                        case 3:
                            switch (thisDay) {
                                case 19:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 20:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 21:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 22:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 23:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 25:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 26:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                case 27:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    break;
                                case 28:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    break;
                                case 29:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 12;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 7);
                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 8);
                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 9);
                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 10);
                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 11);
                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 12);
                }
                break;
            case 3:
                //wednesday
                // monday is today + 5
                endOfMonth = false;
                monthCase = 0;
                leap = false;

                if (thisMonth === 1 || thisMonth === 3 || thisMonth === 5 || thisMonth === 7 || thisMonth === 8 || thisMonth === 10 || thisMonth === 12) {
                    if (thisDay > 20) {
                        endOfMonth = true;
                        monthCase = 1;
                    }
                } else if (thisMonth === 2) {
                    if ((thisYear % 100 ? thisYear % 400 : thisYear % 4)) {
                        leap = true;
                    }
                    if (leap && thisDay > 18) {
                        endOfMonth = true;
                        monthCase = 2;
                    } else if (thisDay > 17) {
                        endOfMonth = true;
                        monthCase = 2;
                    }
                } else {
                    if (thisDay > 19) {
                        endOfMonth = true;
                        monthCase = 3;
                    }
                }
                extra1 = "";
                extra2 = "";
                thisMonth < 10 ? extra1 = "0" : extra1 = "";
                thisDay < 10 ? extra2 = "0" : extra2 = "";
                if (endOfMonth) {
                    switch (monthCase) {
                        case 1:
                            switch (thisDay) {
                                case 21:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 22:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 23:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 25:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 26:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 27:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 28:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                case 29:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    break;
                                case 31:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 2:
                            if (leap) {
                                switch (thisDay) {
                                    case 19:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 20:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 21:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 23:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 24:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 25:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 26:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    case 27:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        break;
                                    case 29:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                switch (thisDay) {
                                    case 18:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 19:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 20:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 21:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 23:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 24:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 25:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    case 26:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        break;
                                    case 27:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                        break;
                                    default:
                                        break;
                                }
                            }

                            break;

                        case 3:
                            switch (thisDay) {
                                case 20:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 21:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 22:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 23:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 25:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 26:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 27:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                case 28:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    break;
                                case 29:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 11;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 7);
                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 8);
                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 9);
                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 10);
                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 11);
                }
                break;
            case 4:
                //thursday
                // monday is today + 4
                endOfMonth = false;
                monthCase = 0;
                leap = false;

                if (thisMonth === 1 || thisMonth === 3 || thisMonth === 5 || thisMonth === 7 || thisMonth === 8 || thisMonth === 10 || thisMonth === 12) {
                    if (thisDay > 21) {
                        endOfMonth = true;
                        monthCase = 1;
                    }
                } else if (thisMonth === 2) {
                    if ((thisYear % 100 ? thisYear % 400 : thisYear % 4)) {
                        leap = true;
                    }
                    if (leap && thisDay > 19) {
                        endOfMonth = true;
                        monthCase = 2;
                    } else if (thisDay > 18) {
                        endOfMonth = true;
                        monthCase = 2;
                    }
                } else {
                    if (thisDay > 20) {
                        endOfMonth = true;
                        monthCase = 3;
                    }
                }
                extra1 = "";
                extra2 = "";
                thisMonth < 10 ? extra1 = "0" : extra1 = "";
                thisDay < 10 ? extra2 = "0" : extra2 = "";
                if (endOfMonth) {
                    switch (monthCase) {
                        case 1:
                            switch (thisDay) {
                                case 22:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 23:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 25:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 26:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 27:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 28:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 29:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    break;
                                case 31:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 2:
                            if (leap) {
                                switch (thisDay) {
                                    case 20:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 21:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 23:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 24:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 25:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 26:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 27:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        break;
                                    case 29:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                switch (thisDay) {
                                    case 19:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 20:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 21:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 23:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 24:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 25:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 26:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    case 27:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                        break;
                                    default:
                                        break;
                                }
                            }

                            break;

                        case 3:
                            switch (thisDay) {
                                case 21:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 22:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 23:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 25:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 26:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 27:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 28:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                case 29:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 10;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 7);
                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 8);
                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 9);
                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 10);
                }
                break;
            case 5:
                //friday
                // monday is today + 3
                endOfMonth = false;
                monthCase = 0;
                leap = false;

                if (thisMonth === 1 || thisMonth === 3 || thisMonth === 5 || thisMonth === 7 || thisMonth === 8 || thisMonth === 10 || thisMonth === 12) {
                    if (thisDay > 22) {
                        endOfMonth = true;
                        monthCase = 1;
                    }
                } else if (thisMonth === 2) {
                    if ((thisYear % 100 ? thisYear % 400 : thisYear % 4)) {
                        leap = true;
                    }
                    if (leap && thisDay > 20) {
                        endOfMonth = true;
                        monthCase = 2;
                    } else if (thisDay > 19) {
                        endOfMonth = true;
                        monthCase = 2;
                    }
                } else {
                    if (thisDay > 21) {
                        endOfMonth = true;
                        monthCase = 3;
                    }
                }
                extra1 = "";
                extra2 = "";
                thisMonth < 10 ? extra1 = "0" : extra1 = "";
                thisDay < 10 ? extra2 = "0" : extra2 = "";
                if (endOfMonth) {
                    switch (monthCase) {
                        case 1:
                            switch (thisDay) {
                                case 23:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 25:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 26:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 27:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 28:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 29:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                case 31:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 2:
                            if (leap) {
                                switch (thisDay) {
                                    case 21:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 23:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 24:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 25:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 26:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 27:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    case 29:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                switch (thisDay) {
                                    case 20:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 21:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 23:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 24:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 25:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 26:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 27:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                        break;
                                    default:
                                        break;
                                }
                            }

                            break;

                        case 3:
                            switch (thisDay) {
                                case 22:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 23:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 25:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 26:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 27:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 28:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 29:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 9;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 7);
                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 8);
                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 9);
                }
                break;
            case 6:
                //saturday
                // monday is today + 2
                endOfMonth = false;
                monthCase = 0;
                leap = false;

                if (thisMonth === 1 || thisMonth === 3 || thisMonth === 5 || thisMonth === 7 || thisMonth === 8 || thisMonth === 10 || thisMonth === 12) {
                    if (thisDay > 23) {
                        endOfMonth = true;
                        monthCase = 1;
                    }
                } else if (thisMonth === 2) {
                    if ((thisYear % 100 ? thisYear % 400 : thisYear % 4)) {
                        leap = true;
                    }
                    if (leap && thisDay > 21) {
                        endOfMonth = true;
                        monthCase = 2;
                    } else if (thisDay > 19) {
                        endOfMonth = true;
                        monthCase = 2;
                    }
                } else {
                    if (thisDay > 22) {
                        endOfMonth = true;
                        monthCase = 3;
                    }
                }
                extra1 = "";
                extra2 = "";
                thisMonth < 10 ? extra1 = "0" : extra1 = "";
                thisDay < 10 ? extra2 = "0" : extra2 = "";
                if (endOfMonth) {
                    switch (monthCase) {
                        case 1:
                            switch (thisDay) {
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 25:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 26:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 27:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 28:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 29:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 31:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        case 2:
                            if (leap) {
                                switch (thisDay) {
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 23:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 24:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 25:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 26:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 27:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 29:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    default:
                                        break;
                                }
                            } else {
                                switch (thisDay) {
                                    case 21:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        break;
                                    case 22:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        break;
                                    case 23:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        break;
                                    case 24:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        break;
                                    case 25:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        break;
                                    case 26:
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        break;
                                    case 27:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        break;
                                    case 28:
                                        thisMonth = thisMonth + 1;
                                        thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                        monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                        tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                        wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                        thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                        friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                        saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                        sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                        break;
                                    default:
                                        break;
                                }
                            }

                            break;

                        case 3:
                            switch (thisDay) {
                                case 23:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    break;
                                case 24:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    break;
                                case 25:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    break;
                                case 26:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    break;
                                case 27:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    break;
                                case 28:
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    break;
                                case 29:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 1;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    break;
                                case 30:
                                    thisMonth = thisMonth + 1;
                                    thisMonth < 10 ? extra1 = "0" : extra1 = "";
                                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 2;
                                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 3;
                                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 4;
                                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 5;
                                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 6;
                                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 7;
                                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + 8;
                                    break;
                                default:
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                    tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                    wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                    thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                    friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                    saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 7);
                    sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 8);
                }
                break;
            default:
                monday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 1);
                tuesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 2);
                wednesday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 3);
                thursday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 4);
                friday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 5);
                saturday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 6);
                sunday = thisYear + "-" + extra1 + thisMonth + "-" + extra2 + (thisDay + 7);
        }

        var week = { monday: monday, tuesday: tuesday, wednesday: wednesday, thursday: thursday, friday: friday, saturday: saturday, sunday: sunday }

        return week;

    }

    onSubmitHandleSaveWeek = (e) => {
        e.preventDefault();
        // get the last date so we can easily add a week
        axios.get('http://localhost:1337/dates/?salon.id=', this.state.salon.id).then((res) => {
            var lastDate = res.data[res.data.length - 1];
            this.setState({ latestDate: lastDate });
            if (!this.state.latestDate) {
                this.setState({ latestDate: null });
            }

            //calculate the dates of next week

            var week = this.calculateWeek(this.state.latestDate);
            // Monday
            //17
            axios.post('http://localhost:1337/dates/', {
                date: week.monday,
                time: "17:00:00.000",
                salon: this.state.salon,
                movie: this.state.mon17,
                TicketsLeft: this.state.salon.seats,
            })
            //19:30:00.000
            axios.post('http://localhost:1337/dates/', {
                date: week.monday,
                time: "19:30:00.000",
                salon: this.state.salon,
                movie: this.state.mon19,
                TicketsLeft: this.state.salon.seats,
            })
            //22
            axios.post('http://localhost:1337/dates/', {
                date: week.monday,
                time: "22:00:00.000",
                salon: this.state.salon,
                movie: this.state.mon22,
                TicketsLeft: this.state.salon.seats,
            })
            // Tuesday
            //17
            axios.post('http://localhost:1337/dates/', {
                date: week.tuesday,
                time: "17:00:00.000",
                salon: this.state.salon,
                movie: this.state.tue17,
                TicketsLeft: this.state.salon.seats,
            })
            //19:30:00.000

            axios.post('http://localhost:1337/dates/', {
                date: week.tuesday,
                time: "19:30:00.000",
                salon: this.state.salon,
                movie: this.state.tue19,
                TicketsLeft: this.state.salon.seats,
            })
            //22
            axios.post('http://localhost:1337/dates/', {
                date: week.tuesday,
                time: "22:00:00.000",
                salon: this.state.salon,
                movie: this.state.tue22,
                TicketsLeft: this.state.salon.seats,
            })
            // Wednesday
            //17
            axios.post('http://localhost:1337/dates/', {
                date: week.wednesday,
                time: "17:00:00.000",
                salon: this.state.salon,
                movie: this.state.wed17,
                TicketsLeft: this.state.salon.seats,
            })
            //19:30:00.000
            axios.post('http://localhost:1337/dates/', {
                date: week.wednesday,
                time: "19:30:00.000",
                salon: this.state.salon,
                movie: this.state.wed19,
                TicketsLeft: this.state.salon.seats,
            })
            //22
            axios.post('http://localhost:1337/dates/', {
                date: week.wednesday,
                time: "22:00:00.000",
                salon: this.state.salon,
                movie: this.state.wed22,
                TicketsLeft: this.state.salon.seats,
            })
            // Thursday
            //17
            axios.post('http://localhost:1337/dates/', {
                date: week.thursday,
                time: "17:00:00.000",
                salon: this.state.salon,
                movie: this.state.thu17,
                TicketsLeft: this.state.salon.seats,
            })
            //19:30:00.000
            axios.post('http://localhost:1337/dates/', {
                date: week.thursday,
                time: "19:30:00.000",
                salon: this.state.salon,
                movie: this.state.thu19,
                TicketsLeft: this.state.salon.seats,
            })
            //22
            axios.post('http://localhost:1337/dates/', {
                date: week.thursday,
                time: "22:00:00.000",
                salon: this.state.salon,
                movie: this.state.thu22,
                TicketsLeft: this.state.salon.seats,
            })
            // Friday
            //17
            axios.post('http://localhost:1337/dates/', {
                date: week.friday,
                time: "17:00:00.000",
                salon: this.state.salon,
                movie: this.state.fri17,
                TicketsLeft: this.state.salon.seats,
            })
            //19:30:00.000
            axios.post('http://localhost:1337/dates/', {
                date: week.friday,
                time: "19:30:00.000",
                salon: this.state.salon,
                movie: this.state.fri19,
                TicketsLeft: this.state.salon.seats,
            })
            //22
            axios.post('http://localhost:1337/dates/', {
                date: week.friday,
                time: "22:00:00.000",
                salon: this.state.salon,
                movie: this.state.fri22,
                TicketsLeft: this.state.salon.seats,
            })
            // Satday
            //17
            axios.post('http://localhost:1337/dates/', {
                date: week.saturday,
                time: "17:00:00.000",
                salon: this.state.salon,
                movie: this.state.sat17,
                TicketsLeft: this.state.salon.seats,
            })
            //19:30:00.000
            axios.post('http://localhost:1337/dates/', {
                date: week.saturday,
                time: "19:30:00.000",
                salon: this.state.salon,
                movie: this.state.sat19,
                TicketsLeft: this.state.salon.seats,
            })
            //22
            axios.post('http://localhost:1337/dates/', {
                date: week.saturday,
                time: "22:00:00.000",
                salon: this.state.salon,
                movie: this.state.sat22,
                TicketsLeft: this.state.salon.seats,
            })
            // Sunday
            //17
            axios.post('http://localhost:1337/dates/', {
                date: week.sunday,
                time: "17:00:00.000",
                salon: this.state.salon,
                movie: this.state.sun17,
                TicketsLeft: this.state.salon.seats,
            })
            //19:30:00.000
            axios.post('http://localhost:1337/dates/', {
                date: week.sunday,
                time: "19:30:00.000",
                salon: this.state.salon,
                movie: this.state.sun19,
                TicketsLeft: this.state.salon.seats,
            })
            //22
            axios.post('http://localhost:1337/dates/', {
                date: week.sunday,
                time: "22:00:00.000",
                salon: this.state.salon,
                movie: this.state.sun22,
                TicketsLeft: this.state.salon.seats,
            })
            this.props.history.push("/mod/shedules")

        })
    }

    render() {

        if (this.props.aUserGroup !== "admin") {
            return (<Redirect to="/" />)
        }
        return (
            <div className={"addScheduleMain"}>
                <div className={"addScheduleWrapper"}>
                    <form className={"addSchedule"} onSubmit={this.onSubmitHandleSaveWeek}>
                        <div>
                            <h2>Lägg till vecka</h2>
                        </div>
                        <div>
                            Välj salong
                        </div>
                        <div>
                            <select name="salon" onChange={this.handleSalon.bind(this)}>
                                {this.state.salons && this.state.salons.map((salon) =>
                                    <option value={salon.id}>
                                        {salon.id}
                                    </option>
                                )}
                            </select>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Dag
                                    </th>
                                    <th>
                                        Tid
                                    </th>
                                    <th>
                                        Film
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Måndag
                                    </td>
                                    <td>
                                        17:00
                                    </td>
                                    <td>
                                        <select name={"mon17"} onChange={this.handleMon17}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Måndag
                                            </td>
                                    <td>
                                        19:30
                                            </td>
                                    <td>
                                        <select name={"mon19"} onChange={this.handleMon19}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Måndag
                                            </td>
                                    <td>
                                        22:00
                                            </td>
                                    <td>
                                        <select name={"mon22"} onChange={this.handleMon22}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tisdag
                                            </td>
                                    <td>
                                        17:00
                                            </td>
                                    <td>
                                        <select name={"tue17"} onChange={this.handleTue17}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tisdag
                                            </td>
                                    <td>
                                        19:30
                                            </td>
                                    <td>
                                        <select name={"tue19"} onChange={this.handleTue19}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tisdag
                                            </td>
                                    <td>
                                        22:00
                                            </td>
                                    <td>
                                        <select name={"tue22"} onChange={this.handleTue22}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Onsdag
                                            </td>
                                    <td>
                                        17:00
                                            </td>
                                    <td>
                                        <select name={"wed17"} onChange={this.handleWed17}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Onsdag
                                            </td>
                                    <td>
                                        19:30
                                            </td>
                                    <td>
                                        <select name={"wed19"} onChange={this.handleWed19}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Onsdag
                                            </td>
                                    <td>
                                        22:00
                                            </td>
                                    <td>
                                        <select name={"wed22"} onChange={this.handleWed22}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Torsdag
                                            </td>
                                    <td>
                                        17:00
                                            </td>
                                    <td>
                                        <select name={"thu17"} onChange={this.handleThu17}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Torsdag
                                            </td>
                                    <td>
                                        19:30
                                            </td>
                                    <td>
                                        <select name={"thu19"} onChange={this.handleThu19}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Torsdag
                                            </td>
                                    <td>
                                        22:00
                                            </td>
                                    <td>
                                        <select name={"thu22"} onChange={this.handleThu22}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Fredag
                                            </td>
                                    <td>
                                        17:00
                                            </td>
                                    <td>
                                        <select name={"fri17"} onChange={this.handleFri17}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Fredag
                                            </td>
                                    <td>
                                        19:30
                                            </td>
                                    <td>
                                        <select name={"fri19"} onChange={this.handleFri19}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Fredag
                                            </td>
                                    <td>
                                        22:00
                                            </td>
                                    <td>
                                        <select name={"fri22"} onChange={this.handleFri22}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Lördag
                                            </td>
                                    <td>
                                        17:00
                                            </td>
                                    <td>
                                        <select name={"sat17"} onChange={this.handleSat17}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Lördag
                                            </td>
                                    <td>
                                        19:30
                                            </td>
                                    <td>
                                        <select name={"sat19"} onChange={this.handleSat19}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Lördag
                                            </td>
                                    <td>
                                        22:00
                                            </td>
                                    <td>
                                        <select name={"sat22"} onChange={this.handleSat22}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Söndag
                                            </td>
                                    <td>
                                        17:00
                                            </td>
                                    <td>
                                        <select name={"sun17"} onChange={this.handleSun17}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Söndag
                                            </td>
                                    <td>
                                        19:30
                                            </td>
                                    <td>
                                        <select name={"sun19"} onChange={this.handleSun19}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Söndag
                                            </td>
                                    <td>
                                        22:00
                                            </td>
                                    <td>
                                        <select name={"sun22"} onChange={this.handleSun22}>
                                            {this.state.movies && this.state.movies.map((movie) =>
                                                <option value={movie.id}>
                                                    {movie.title}
                                                </option>
                                            )}
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className={"savebutton"} type="submit">Spara</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(HandleShedule);