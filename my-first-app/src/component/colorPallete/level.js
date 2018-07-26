import React, { Component } from 'react';

export default class Level extends Component {
    render() {
        return (
            <h6 className="card-subtitle mb-2 text-muted"> {this.props.title}</h6>
        )
    }
};
//#TM: Looks good