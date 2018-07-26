import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Counter from '../component/counter/counter';
import Card from '../component/colorPallete/card';
import Clock from '../component/digitalClock/clock';
import ToDoTask from '../component/toDo/toDo';
import UserData from '../component/userData/userData';

const AppRouter = () => (
    <Router>
      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">React Exercises</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Color Pallete</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/counter" className="nav-link">Counter</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/digital-clock" className="nav-link">Digital Clock</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/to-do" className="nav-link">To Do</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/user-data" className="nav-link">User data</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Route exact path="/" component={Card} />
            <Route path="/counter" component={Counter} />
            <Route path="/digital-clock" component={Clock} />
            <Route path="/to-do" component={ToDoTask} />
            <Route path="/user-data" component={UserData} />
      </div>
    </Router>
  );

  export default AppRouter;