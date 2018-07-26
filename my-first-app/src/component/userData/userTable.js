import React, {Component} from 'react';

export default class Table extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "2rem" }}>
        <div className="row">
          <div className="col align-self-center">
            <div className="text-center list-group-item-success">
              User Table
            </div>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Website</th>
                </tr>
              </thead>
              <tbody>
                {this.props.userData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.website}</td>
                    </tr>
                  )
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}