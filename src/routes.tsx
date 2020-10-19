import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import landing from './Pages/landing';
import MapOrfanato from './Pages/MapOrfanato';

function Routes()
{
    return(
        <BrowserRouter>
        <switch>
            <Route path="/"  exact component={landing} />
            <Route path="/app" component={MapOrfanato} />
            </switch>
        </BrowserRouter>
    );
}

export default Routes;
