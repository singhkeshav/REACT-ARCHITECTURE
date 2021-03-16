import React, { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const CoreModules = lazy(()=> import('../modules/core'));
const DashboardModules = lazy(()=> import('../modules/dashboard'));
const MainRouting = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
        <Router>
            <Switch>
                <Route exact path="/"  component={CoreModules}></Route>
                <Route exact path="/dashboard"  component={DashboardModules}></Route>
                <Route exact path="*" component={CoreModules}></Route>

            </Switch>
        </Router>
    </Suspense>
    )
}

export default MainRouting;