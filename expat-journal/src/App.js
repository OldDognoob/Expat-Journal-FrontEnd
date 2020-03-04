import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

//import components
import LoginForm from "../src/component/Entry/LoginForm";
import SignUpForm from "../src/component/Entry/SignUpForm";
import PrivateRoute from "./utils/PrivateRoute";
import Nav from "./component/Navigation/Nav";
import WelcomePage from "./component/Home/WelcomePage";
import UserPost from "./component/Posts/UserPosts";
import CreatePost from "./component/Posts/CreatePost";
import UpdatePost from "../src/component/Posts/UpdatePost";
import Browse from "../src/component/Home/Browse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* <Route exact path="/">
            <Nav />
            <Route exact path="/">
              <Browse />
            </Route>
          </Route> */}
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route exact path="/register">
            <SignUpForm />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <PrivateRoute exact path="/posts">
            <Browse />
          </PrivateRoute>
          <PrivateRoute exact path="/createPost">
            <CreatePost />
          </PrivateRoute>
          <PrivateRoute exact path="/updatePost/:id">
            <UpdatePost />
          </PrivateRoute>
          <PrivateRoute exact path="/posts/:id">
            <UserPost />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
