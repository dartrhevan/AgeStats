import React from "react";

export default class Header extends React.PureComponent {
    render() {
        return (<header>
            <h2>
                <a href='/'><b>Age statistics</b></a>
            </h2>
            <a className='link' href='/add'>Add data</a>
            <a className='link' href='/people-list'>List people</a>
        </header>);
    }
}
