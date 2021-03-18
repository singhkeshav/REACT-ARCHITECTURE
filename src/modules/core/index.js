import React, { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
const Corelayout =  lazy(() => import('../../shared/layout/home-layout'));
const Login = lazy(() => import('./page/Login'));
const Aboutus = lazy(() => import('./page/Aboutus'));
const Home = lazy(() => import('./page/Home'));
const coreModules = ({ match }) => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Router>
                <Switch>
                    <Corelayout path={match.url} component={Home} exact={true} />
                    <Corelayout path={match.url + "about"} component={Aboutus} exact={true} />
                    <Corelayout path={match.url + "login"} component={Login} exact={true} />
                </Switch>
            </Router>
        </Suspense>

    )
}

export default coreModules;