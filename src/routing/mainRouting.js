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
                    <Route  path="/"  component={CoreModules}  />
                </Switch>
              </Router>
             <Router>   
                <Switch>
                   <Route  path="/dashboard"  component={DashboardModules}  />
                </Switch>
            </Router>
        </Suspense>
    )
}

export default MainRouting;