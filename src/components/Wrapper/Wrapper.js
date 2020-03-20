import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import * as Styles from "./Wrapper.module.css";

import Header from "../Header/Header";
import OverallView from "../../containers/OverallView/OverallView";
import MapView from "../../containers/MapView/MapView";
import GraphView from "../../containers/GraphView/GraphView";
import Navigation from "../Navigation/Navigation";
import AboutView from "../../containers/AboutView/AboutView";

const Wrapper = () => {
    return (
        <div className={Styles.Wrapper}>
            <Header />

            <Switch>
                <Route path='/map' render={() => <MapView />} exact />
                <Route path='/graph' render={() => <GraphView />} />
                <Route path='/about' render={() => <AboutView />} />
                <Route path='/overall' render={() => <OverallView />} />
                <Redirect from="/" exact to="/overall" />
            </Switch>

            <Navigation />
        </div>
    )
}

export default Wrapper;