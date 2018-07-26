import React, { Component } from 'react';
import AddTask from './addTask';
import TaskList from './taskLIst';
import FilterTask from './filterTask';

export default class ToDoTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            filter: 'all'
        };
    }

    updateTaskStatus = (index) => {
        this.setState((prevState)=>{
            prevState.tasks[index].status = (prevState.tasks[index].status === 'completed') ? prevState.tasks[index].status = 'processing' : prevState.tasks[index].status = 'completed';
            return {
                tasks: prevState.tasks
            }   
        });
    }

    inputFieldChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    filterTask = (status) => {
        this.setState({
            filter: status
        });
    }

    addTask = (task) => {
        this.state.tasks.push({ task: this.state.input, status: 'processing' });
        this.setState(
            this.state
        )
    }

    render() {
        return (
            <div className="container" style={{ marginTop: "2rem" }}>
                <div className="row">
                    <AddTask action={this.addTask} fieldAction={this.inputFieldChange} />
                </div>
                <div className="row">
                    <TaskList tasks={this.state} statusUpdate={this.updateTaskStatus} />
                </div>
                <div className="row">
                    <FilterTask action={this.filterTask} />
                </div>
            </div>
        )
    }
}