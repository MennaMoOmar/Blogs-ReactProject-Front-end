import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../Sass/main.scss"

import Navbar from "./navbar"
import Home from "./home"
import About from "./about"
import Blogs from "./blogs"
import ContactUs from "./contactUs"
import JoinUs from "./joinus"
import EditProfile from "./editProfile"
import LoginPage from "./loginpage"
import RegisterPage from "./registerpage"
import ShowProfile from "./showProfile"
import AddPost from "./addPost"
import CreatePostbtn from "./createPostbtn"
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
            <Route path="/loginpage" component={LoginPage} />
            <Route path="/registerpage" component={RegisterPage} />
            <Route path="/editprofile" component={EditProfile} />
            <Route path="/showprofile/:id" component={ShowProfile} />
            <Route path="/createpostbtn" component={CreatePostbtn} />
            <Route path="/addpost" component={AddPost} />
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
