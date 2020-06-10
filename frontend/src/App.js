import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import './App.css';
import { connect } from "react-redux";
import actions from './store/actions'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Switch>

        </Switch>
      </BrowserRouter>
      <footer>
          Age statistics - 2020
      </footer>
    </div>
  );
}

function mapStateToProps(state) {
    return {
        people: state.people
    };
}

export default connect(mapStateToProps, actions)(App);
