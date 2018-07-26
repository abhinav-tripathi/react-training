import React, { Component } from 'react';

export default class TaskList extends Component {

    updateStatus = (index) => {
        this.props.statusUpdate(index);
    }

    getUpdatedTask = (tasks, index) => {
        return <li data-id={index} onClick={() => this.updateStatus(index)} key={index} className={(tasks.status === 'completed') ? 'list-group-item-secondary list-group-item' : 'list-group-item-info list-group-item'}>
            {tasks.task}
        </li>
    }

    render() {
        let currentFilter = this.props.tasks.filter;
        return (
            <ul className="list-group mx-sm-3 mb-2 col-sm">
                {this.props.tasks.tasks.map((tasks, index) => {
                    if (currentFilter === 'all') {
                        return this.getUpdatedTask(tasks, index);
                    } else if (currentFilter === 'completed') {
                        if (tasks.status === 'completed') {
                            return this.getUpdatedTask(tasks, index);
                        }
                    } else if (currentFilter === 'processing') {
                        if (tasks.status === 'processing') {
                            return this.getUpdatedTask(tasks, index);
                        }
                    }
                    return true;
                })}
            </ul>
        )
    }
}
