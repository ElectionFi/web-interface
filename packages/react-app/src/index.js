import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./index.css";
import App from "./App";
import About from "./components/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import "mdbreact/dist/css/mdb-free.css";
// import "./assets/scss/mdb-free.scss";

// You should replace this url with your own and put it into a .env file
// See all subgraphs: https://thegraph.com/explorer/
const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <App />
        </Route>
        {/* <Route path="/about">
          <About />
        </Route> */}
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
