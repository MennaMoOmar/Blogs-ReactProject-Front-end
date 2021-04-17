import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../Sass/main.scss"

import Navbar from "./navbar"
import Home from "./home"
import About from "./about"
import Blogs from "./blogs"
import ContactUs from "./contactUs"
import JoinUs from "./joinus"
import NotFound from "./notFound"

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/joinus" component={JoinUs} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/notfound" />
        </Switch>
      </main>
    </>
  );
};

export default App;
