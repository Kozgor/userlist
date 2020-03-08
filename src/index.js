import React from 'react';
import { Fragment } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './componentList.js';

const App = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="container d-flex justify-content-center">
                    <h1>Hello world</h1>
                </div>
                <div>
                    <UserList />
                </div>
            </div>
        </Fragment>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));