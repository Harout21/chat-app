import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Login from "../components/login";
import Chats from "../components/chats";
import {useSelector} from "react-redux";

const Routes = () => {
    const value = useSelector(state => state.reducer.value);

    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}/>
                {
                    value ? <Route exact path="/chats" component={Chats}/>
                        :
                        <Route exact path="/login" component={Login}/>
                }
                <Redirect from="*" to="/login"/>
            </Switch>
        </Router>
    );
};

export default Routes;