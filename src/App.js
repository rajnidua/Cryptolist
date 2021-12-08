import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchCryptoList from "./pages/SearchCryptoList";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={SearchCryptoList} />

          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
