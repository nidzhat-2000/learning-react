import React from 'react';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create.jsx';
import { Setup } from './Setup.jsx';
import { BlogDetails } from './BlogDetails.jsx';

const App = () => {
  // const title = 'App Component';
  // const likes = 50
  // // const person = {name: "nijat", age: 22}
  // const link = "http://www.google.com"

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/setup">
              <Setup />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
          {/* <Online/> */}

          {/* <h1>{title}</h1> */}
          {/*<p> {likes} liked times</p> */}
          {/* <p> {person.name} has {person.age} ages</p> */}
          {/* <p> {'hello ninjas'}</p>
        <p> {[1,2,3,4]}</p>
        <p> {Math.random()*10} </p> */}
          {/* All written in {} turns value into string */}

          {/* <a href={link}>Google Site</a> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
