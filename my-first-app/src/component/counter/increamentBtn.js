import React, { Component } from 'react';

export default class Increament extends Component {
    
    render() {
        return (
                <button onClick={this.props.callBackIncrement} className="btn btn-primary">{this.props.level}</button>
        )
    }

};
//#TM: Looks good