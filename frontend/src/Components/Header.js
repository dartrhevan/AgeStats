import React from "react";

export default class Header extends React.Component {
    render() {
        return (<header>
            <h2>
                <b>Age statistics</b>
            </h2>
            <a href='/add'>Add</a>
            <a href='/list'>List</a>
        </header>);
    }
}
