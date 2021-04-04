import React, { lazy, Suspense } from "react";
import {
    Switch,
    useRouteMatch,
    withRouter
} from "react-router-dom";
const Corelayout =  lazy(() => import('../../shared/layout/home-layout'));
const Login = lazy(() => import('./page/Login'));
const Aboutus = lazy(() => import('./page/Aboutus'));
const Home = lazy(() => import('./page/Home'));
const CoreModules = () => {
   const {url} =  useRouteMatch();
    return (
        <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                    <Corelayout path={`${url}`} component={Home} exact={true} />
                    <Corelayout path={`${url}about`} component={Aboutus} exact={true} />
                    <Corelayout path={`${url}login`} component={Login} exact={true} />
                </Switch>
        </Suspense>


    )
}

export default withRouter(CoreModules);