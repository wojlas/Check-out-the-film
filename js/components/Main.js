import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import { BrowserRouter as Router,
    Switch,
    Route
 } from "react-router-dom";

import Landing from "./Home";
import SingleMovie from "./SingleMovie/SingleMovie"


const Main = () => (
    <Provider store={store} > 
        <Router>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/movie/:id?" component={SingleMovie}/>
            </Switch>
        </Router>
    </Provider>
)

export default Main;