import React from "react";

export default class AddMan extends React.Component {

    componentDidMount() {
        this.props.selectPeople()
    }

    apply = () =>
        this.props.selectPeople(document.getElementById('pattern').value,
            document.getElementById('min').value, document.getElementById('max').value);

    render() {
        console.log(this.props);
        return <div className='content'>
            <div align='center'>
                <h2><b>Filter</b></h2>
                Pattern: <input id='pattern' value='' />
                <br/>
                Min age: <input value={0} id='min' type='number'/>
                <br/>
                Max age: <input value={110} id='max' type='number'/>
                <br/>
                <button onClick={this.apply}>Apply</button>
            </div>
            <hr/>
            <h4>
                Data:
            </h4>
            <table border='1'>
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
