import React, { Component } from 'react';
import Table from './userTable';

export default class UserData extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userData : [],
      dataReady : false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        userData: data,
        dataReady: true
      })
    })
  }

  render() {
    if(this.state.dataReady) {
      return (
        <Table userData={this.state.userData} />
      )
    } 
    return true;
  }
}