import React from 'react';
import {connect} from 'react-redux';
import Hello from './hello';
import {Route} from 'react-micro-router';

function App() {

    return (
        <div>
            <Route path="/" exact>
                <Hello/>
            </Route>
        </div>
    );

}

export default connect(
  state => state
)(App);
