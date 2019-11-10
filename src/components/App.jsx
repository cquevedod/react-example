import React from 'react';
import '../styles/styles.scss';
import Form from './Pages/Form';
import CourseGrid from './Organisms/CourseGrid';
import Course from './Pages/Course';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './Organisms/MainMenu';
import History from './Pages/History';
import Home from './Pages/Home';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/courses/:id" component={ Course } />
      <Route path="/courses" component={ CourseGrid } />
      <Route path="/history/:valor" component={ History } />
      <Route path="/history" component={ History } />
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
