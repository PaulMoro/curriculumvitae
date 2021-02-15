import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from '../containers/HomePage';
import PersonPage from '../containers/PersonPage'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/person/:personId" component={PersonPage} />
      </Router>
    </>
  );
};

export default App;