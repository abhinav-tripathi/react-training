import React, {Component} from 'react';

export default class Result extends Component {
    render() {
        return(
                <span className="badge badge-light">Counter {this.props.initialValue}</span>
        )
    }
};
//#TM: Looks good
