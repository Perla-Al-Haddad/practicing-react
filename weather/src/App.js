import './App.css';
import * as React from "react"
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';

import Dashboard from './Components/Pages/DashBoard';
import D3Dashboard from './Components/Pages/D3DashBoard';

export default class App extends React.Component {
  getChildContext() {
    return {
      d3plus: {
        shapeConfig: {
          fontFamily: "Times New Roman"
        },
        color: 'red'
      }
    };
  }
  
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/test" exact element={<D3Dashboard />} />
        </Routes>
      </Router >
    )
  }
}

App.childContextTypes = {
  d3plus: PropTypes.object
};