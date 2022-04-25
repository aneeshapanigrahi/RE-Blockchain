import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from '../Main';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Main} />
            </Switch>
        );
    }
}

export default Routes;