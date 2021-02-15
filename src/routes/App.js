import React from 'react';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Certificates from '../components/Certificates';
import PersonPage from '../components/PersonPage';

const App = () => (
  <>
    <Router>
      <Route exact path="/" component={Certificates} />
      <Route path="/character/:id" component={PersonPage} />
    </Router>
  </>
);

export default App;