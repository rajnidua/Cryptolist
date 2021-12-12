import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TrendingCrypto from "./pages/TrendingCrypto";
import Navbar from "./components/Navbar/Navbar";
import SingleCrypto from "./pages/SingleCrypto";
import AllCryptos from "./pages/AllCryptos";
import FilterCryptos from "./pages/FilterCryptos";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/trendingCrypto" component={TrendingCrypto} />
          <Route exact path="/singleCrypto" component={SingleCrypto} />
          <Route exact path="/allCryptos" component={AllCryptos} />
          <Route exact path="/" component={FilterCryptos} />
          <Route exact path="/cryptolist" component={FilterCryptos} />
          <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
