
import React, { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
const DashboardLayoutRoute = lazy(() => import('../../shared/layout/dashboard.layout'));
const UserDashboard = lazy(() => import('./page/user/user.dashboard'));
const HomeDashboard = lazy(() => import('./page/home/home.dashboard'));
const DashboardModules = ({match}) => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Router>
                <Switch>
                    <DashboardLayoutRoute path={match.url}  component={HomeDashboard} exact={true}/>
                    <DashboardLayoutRoute path={`${match.url}/users`}   component={UserDashboard} exact={true} />
                </Switch>
            </Router>
        </Suspense>

    )
}
export default DashboardModules;