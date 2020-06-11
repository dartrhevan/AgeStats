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
        console.log(this.props)
        return (
            <div className="App">
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route render={() => <AddMan {...this.props} />} exact path='/add'/>
                        <Route render={() => <ListPeople {...this.props} />} exact path='/people-list'/>
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
}

function mapStateToProps(state) {
    return {
        people: state.people
    };
}

export default connect(mapStateToProps, actions)(App);
