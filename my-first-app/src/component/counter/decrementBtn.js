import React, { Component } from 'react';

export default class Decrement extends Component {

    render() {
        return (
            <button onClick={this.props.callBackDecrement} className="btn btn-dark">{this.props.level}</button>
        )
    }
};
//#TM: Looks good