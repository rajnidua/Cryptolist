import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchCryptoList from "./pages/SearchCryptoList";
import TrendingCrypto from "./pages/TrendingCrypto";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchCryptoList} />
          <Route exact path="/trendingCrypto" component={TrendingCrypto} />

          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
