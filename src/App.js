import "./App.css";
import React from "react";

import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import AddDeliveryAddress from "./Address";
import SignIn from "./SignIn";
import { useEffect } from "react";
import { auth } from "./firebase1";
import { useStateValue } from "./stateprovider";
import Footer from "./Footer";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>", authUser);

      if (authUser) {
        //user login
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logout
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/add-delivery-address">
            <Header />
            <AddDeliveryAddress />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
