import React, { Component } from 'react';
import Content from './contentPanel';
import Level from './level';

export default class Card extends Component {
  render() {
    let arr = [
      { name: 'Mohan', title: 'Consultant' },
      { name: 'Rakesh', title: 'Developer' },
      { name: 'Aditya', title: 'Student' },
      { name: 'Mohit', title: 'Manager' }
    ];

    return (
      <div className="container" style={{ marginTop: "2rem" }}>
        <div className="row">
          {arr.map((list, index) => {
            return (

              <div className="card col-sm" key={index}>
                <div key={index} className="card-body">
                  <Content name={list.name} />
                  <Level title={list.title} />
                </div>
              </div>

            )
          })}
        </div>
      </div>
    );
  }
};
//#TM: Looks good