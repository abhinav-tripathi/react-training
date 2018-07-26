import React, { Component } from 'react';

export default class Content extends Component {
    render() {
        return (
            <h5 className="card-title">{this.props.name}</h5>
        )
    }
};
//#TM: Looks good