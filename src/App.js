import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container app_container">
          <div className="row app_row">

            <div className="col-lg-3">
              {/* <div className="app_sidebar"> */}
              <Sidebar></Sidebar>
              {/* </div> */}
            </div>
            <div className="col-lg-9 app_main_content">
              <Navbar></Navbar>
              <Switch>
              <Route exact path="/">
                <About></About>
              </Route>
              <Route path="/resume">
                <Resume></Resume>
              </Route>

              <Route path="/projects" component={Projects} />
              
              <Route>
                <Redirect to="/"></Redirect>
              </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
