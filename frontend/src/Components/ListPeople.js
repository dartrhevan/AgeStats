import React from "react";

import { getData } from '../api'
import ManItem from "./ManItem";

export default class AddMan extends React.Component {

    componentDidMount() {
        document.getElementById('min').value = 0;
        document.getElementById('max').value = 110;
        getData()
            .then(d => {
                if(d && d.message)
                    alert(d.message);
                else
                    this.props.setPeople(d.people , d.statistics);
            })
    }

    apply = () => {
        const pattern = document.getElementById('pattern').value,
            min = document.getElementById('min').value,
            max = document.getElementById('max').value;
        return getData(pattern, min, max)
            .then(d => {
                if (d.message)
                    alert(d.message);
                else
                    this.props.setPeople(d.people, d.statistics, {pattern, max, min});
            });
    };

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
                <hr/>
                Count: {this.props.people.length}
                <br/>
                Average age: {this.props.statistics.average}
                <br/>
                Dispersion: {this.props.statistics.dispersion}
                <br/>
                Deviation: {this.props.statistics.deviation}
                <br/>
                Mode: {this.props.statistics.mode}
                <hr/>
            </div>

            <h4>
                Data:
            </h4>
            <table cellSpacing='0'>
                <thead>
                    <tr>
                        <td>
                            <b>Name</b>
                        </td>
                        <td>
                            <b>Age</b>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                {this.props.people.map(m => <ManItem key={m.id} {...this.props} man={m} />)}
                </tbody>
            </table>
        </div>;
    }
}
