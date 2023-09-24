import React from "react";
import {Route, Switch} from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";


const Routes = () => {
    return(
        <main style={{textAlign: "center"}}>
            <Switch>
                <Route exact key="/" path="/" component={IndexPage} />;
                <Route exact key="/" path="/pageone" component={PageOne} />;
                <Route exact key="/" path="/pagetwo" component={PageTwo} />;
            </Switch>
        </main>
    )
};

export default Routes;