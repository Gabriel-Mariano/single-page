import React from 'react';
import {BrowserRouter, Switch, Route}from 'react-router-dom';
import Header from './components/header';

function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
               <Route exact path="/" component={Header}/> 
            </Switch>
        </BrowserRouter>
    );
}

export default Rotas;
