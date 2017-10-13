import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import Routes from './routes';
import RootReducer from './reducers/root.reducer';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(<Provider store={createStoreWithMiddleware(RootReducer)}><Router history={browserHistory} routes={Routes} /></Provider>, document.getElementById('container'));

if ((location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1") && "serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}
