import './App.css';

import * as React from "react"
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

import Dashboard from './Components/Pages/DashBoard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/test" exact />
      </Routes>
    </Router>
  )
}

export default App;
