import React from "react";

import { getData } from '../api'

export default class AddMan extends React.Component {

    componentDidMount() {
        document.getElementById('min').value = 0;
        document.getElementById('max').value = 110;
        getData()
            .then(d =>
                this.props.setPeople(d.people, d.statistics))
    }

    apply = () =>
        getData(document.getElementById('pattern').value ,
            document.getElementById('min').value , document.getElementById('max').value)
            .then(d =>
                this.props.setPeople(d.people, d.statistics));

    render() {
        console.log(this.props);
        return <div className='content'>
            <div align='center'>
                <h2><b>Filter</b></h2>
                Pattern: <input id='pattern' />
                <br/>
                Min age: <input id='min' type='number'/>
                <br/>
                Max age: <input id='max' type='number'/>
                <br/>
                <button onClick={this.apply} className='link'>Apply</button>
            </div>
            <hr/>
            <h4>
                Data:
            </h4>
            <table border='1' bgcolor='black'>
                <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Age
                        </td>
                    </tr>
                </thead>
                <tbody>
                {this.props.people.map(m => (
                    <>
                    <tr>
                    <td>
                        {m.name}
                    </td>
                    <td>
                        {m.age}
                    </td>
                </tr>
                </>))}
                </tbody>
            </table>
        </div>;
    }
}
