import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EntryForm from "./Page/EntryForm";
import Resume from "./Page/Resume";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={EntryForm} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
