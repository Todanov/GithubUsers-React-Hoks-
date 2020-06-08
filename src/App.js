import React from "react";
import s from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Information from "./components/Information/Information";
import { GithubState } from "./components/context/github/GithubState";

function App() {
  return (
    <GithubState>
      <BrowserRouter>
        <div className={s.wrapper}>
          <div className={s.navbar}>
            <Navbar />
          </div>
          <Switch>
            <div className={s.main}>
              <Route path="/" exact component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/information" component={Information} />
            </div>
          </Switch>
          <div className={s.footer}>Better later, than never!</div>
        </div>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
