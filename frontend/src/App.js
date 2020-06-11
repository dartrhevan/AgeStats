import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import './App.css';
import { connect } from "react-redux";
import * as actions from './store/actions'
import AddMan from "./Components/AddMan";
import ListPeople from "./Components/ListPeople";
import Header from "./Components/Header";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route component={AddMan} exact path='/add'/>
                        <Route render={() => <ListPeople {...this.props} />} exact path='/people-list'/>
                        <div className='content'>
                            <b>Age statistic collector</b>
                        </div>
                    </Switch>
                </BrowserRouter>
                <footer>
                    Age statistics - 2020
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        people: state.people,
        statistics: state.statistics
    };
}

export default connect(mapStateToProps, actions)(App);
