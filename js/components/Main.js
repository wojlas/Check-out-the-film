import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import { BrowserRouter as Router,
    Switch,
    Route
 } from "react-router-dom";

import Landing from "./Home";
import SingleMovie from "./SingleMovie/SingleMovie";
import ViewedOn from "./UserPages/ViewedOn";
import ToView from "./UserPages/ToView";


const Main = () => (
    <Provider store={store} > 
        <Router>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/movie/:id?" component={SingleMovie}/>
                <Route exact path="/viewed" component={ViewedOn}/>;
                <Route exact path="/toview" component={ToView}/>;
            </Switch>
        </Router>
    </Provider>
)

export default Main;