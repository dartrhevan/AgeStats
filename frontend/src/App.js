import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import './App.css';
import { connect } from "react-redux";
import * as actions from './store/actions'
import AddMan from "./Components/AddMan";
import ListPeople from "./Components/ListPeople";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
            <Route component={AddMan} exact path='/add'/>
            <Route component={ListPeople} exact path='/people-list'/>
            <div className='content'>
                Hello world!
            </div>
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
