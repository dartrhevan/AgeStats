import React from 'react';

export default class ManItem extends React.Component {
    constructor() {
        super();
        this.state = {editing: false};
        this.nameRef = React.createRef();
        this.ageRef = React.createRef();
    }

    toggle = () => this.setState({editing: !this.state.editing}, () => {

    });

    delete = () => {

    };

    send = () => {

    };

    render() {
        return this.state.editing ?
                (<tr>
                    <td>
                        <input ref={this.nameRef}/>
                    </td>
                    <td>
                        <input ref={this.ageRef}/>
                    </td>
                    <td>
                        <button className='link' onClick={this.send}>Submit</button>
                    </td>
                    <td>
                        <button className='link' onClick={this.toggle}>Cancel</button>
                    </td>
                </tr>) :
                (<tr>
                    <td>
                        {this.props.man.name}
                    </td>
                    <td>
                        {this.props.man.age}
                    </td>
                    <td>
                        <button onClick={this.toggle}>Edit</button>
                    </td>
                    <td>
                        <button onClick={this.delete}>X</button>
                    </td>
                </tr>)

    }
}
