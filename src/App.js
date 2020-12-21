import React from "react";
import Header from './Header';
<<<<<<< HEAD
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

=======
import './App.css';
>>>>>>> origin/master

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Chat Page</h1>
          </Route>
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
=======
      <h1>Let's build the Tinder Clone App</h1>

      {/*header */}
      <Header />
      {/*tinder cards */}
      {/*buttons below tinder card */}
      {/*chats screen */}
      {/*individual chat screen */}
>>>>>>> origin/master
    </div>

  );
}

export default App;
