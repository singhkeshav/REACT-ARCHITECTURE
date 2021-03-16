import React, { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./shared/Header/Header";


const Login = lazy(() => import('./page/Login'));
const Aboutus = lazy(() => import('./page/Aboutus'));
const Home = lazy(() => import('./page/Home'));
const coreModules = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" > <Home/></Route>
                    <Route path="/about">
                        <Aboutus />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </Suspense>

    )
}

export default coreModules;