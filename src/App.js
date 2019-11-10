import React from 'react';
import './styles/styles.scss';
import Banner from './Banner';
import Form from './Form';
import CourseGrid from './CourseGrid';
import CourseInfo from './CourseInfo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './MainMenu';
import Historial from './Historial';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Banner } />
      <Route path="/courses/:id" component={ CourseInfo } />
      <Route path="/courses" component={ CourseGrid } />
      <Route path="/historial/:valor" component={ Historial } />
      <Route path="/historial" component={ Historial } />
      <Route path="/form" component={ () => <Form formName="contact page"/> } />
      <Route component={ () => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Page Not Found</span>
        </div>
      )} />
    </Switch>
  </Router>
)

export default App;
