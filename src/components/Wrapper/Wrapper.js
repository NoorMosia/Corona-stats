import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import * as Styles from "./Wrapper.module.css";

import Header from "../Header/Header";
import MapView from "../../containers/MapView/MapView";
import GraphView from "../../containers/GraphView/GraphView";
import Navigation from "../Navigation/Navigation";
import AboutView from "../../containers/AboutView/AboutView";
import ZAView from "../../containers/ZAView/ZAView";
import Home from "../Home/Home";

const Wrapper = () => {
    return (
        <div className={Styles.Wrapper}>
            <Header />

            <Switch>
                <Route path='/home' render={() => <Home />} />
                <Route path='/map' render={() => <MapView />} exact />
                <Route path='/graph' render={() => <GraphView />} />
                <Route path='/about' render={() => <AboutView />} />
                <Route path='/za' render={() => <ZAView />} />
                <Redirect from="/" exact to="/home" />
            </Switch>

            <Navigation />
        </div>
    )
}

export default Wrapper;