import React, {Component} from 'react';

export default class FilterTask extends Component {

    filterTask = (status) => {
        this.props.action(status);
    }
    
    render() {
        return(
            <div className="form-inline">
                <div className="form-group">
                    <button onClick={()=>this.filterTask('all')} className="btn btn-primary mx-sm-3 mb-2">All Task</button>
                    <button onClick={()=>this.filterTask('completed')} className="btn btn-secondary mx-sm-3 mb-2">Completed</button>
                    <button onClick={()=>this.filterTask('processing')} className="btn btn-info mx-sm-3 mb-2">In Process</button>
                </div>
            </div>
        )
    }
}