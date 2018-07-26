import React, { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: ''
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            let date, hours, mins, second, time, amPm;

            date = new Date();
            hours = date.getHours();
            mins = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
            second = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

            amPm = (hours >= 12) ? 'PM' : 'AM';

            time = `${hours} : ${mins} : ${second} ${amPm}`;

            this.setState({ time: time });


        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div className="container" style={{ marginTop: "2rem" }}>
                <div className="row">
                    <div className="alert alert-primary" role="alert">
                        {this.state.time}
                    </div>
                </div>
            </div>
        )
    }
}
//#TM: looks good