import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    RouterProvider,
} from "react-router-dom";
import store from './store/store'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>

);

