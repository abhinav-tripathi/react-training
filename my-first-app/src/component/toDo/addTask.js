import React, {Component} from 'react';

export default class AddTask extends Component {

    inputChangeHandle = (e) => {
        this.props.fieldAction(e);
    }

    addTask = () => {
        this.props.action({task:'', status: 'processing'});
    }

    render() {
        return(
            <div className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input name="addTask" className="add-task form-control" onChange={ this.inputChangeHandle } placeholder="Add task" />
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={this.addTask}>Add Task</button>
            </div>
        )
    }
}

//#TM: Looks good