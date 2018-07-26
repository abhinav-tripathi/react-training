import React, { Component } from 'react';
import Increament from './increamentBtn';
import Decreament from './decrementBtn';
import Result from './result';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0
        }
    }

    incrementNumber = () => {
        this.setState((prevState) => { 
            return {
                currentValue: prevState.currentValue + 1 
            }
        });
    }

    decrementNumber = () => {
        this.setState((prevState) => { 
            return {
                currentValue: prevState.currentValue - 1 
            }
        });
    }

    render() {
        const buttonLevel = {
            incrementBtn: 'Increment by 1',
            decrementBtn: 'Decrement by 1'
        };

        return (
            <div className="container" style={{ marginTop: "2rem" }}>
                <div className="row">
                    {/* <button onClick={() => this.incrementNumber()}>Clikc</button> */}
                    {/* <button onClick={() => this.decrementNumber()}>minus</button> */}
                    <div className="col-sm">
                        <Increament level={buttonLevel.incrementBtn} callBackIncrement={this.incrementNumber} />
                    </div>
                    <div className="col-sm">
                        <Decreament level={buttonLevel.decrementBtn} callBackDecrement={this.decrementNumber} />
                    </div>
                    <div className="col-sm">
                        <Result initialValue={this.state.currentValue} />
                    </div>
                </div>
            </div>
        )
    }
};