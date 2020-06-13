import React from 'react';

import { deleteMan , updateMan , uploadData } from "../api";

export default class ManItem extends React.Component {
    constructor() {
        super();
        this.state = {editing: false};
        this.nameRef = React.createRef();
        this.ageRef = React.createRef();
    }

    toggle = () => this.setState({editing: !this.state.editing}, () => {
        this.nameRef.current.value = this.props.man.name;
        this.ageRef.current.value = this.props.man.age;
    });

    delete = () => deleteMan(this.props.man.id)
        .then(r => {
            if(r && r.message)
                alert(r.message);
            //TODO: removal
        });

    send = () => updateMan(this.props.man.id, this.nameRef.current.value, this.ageRef.current.value)
        .then(r => {
            if(r && r.message)
                alert(r.message);
            //TODO: update
        });

    render() {
        return this.state.editing ?
                (<tr>
                    <td>
                        <input ref={this.nameRef}/>
                    </td>
                    <td>
                        <input type='number' ref={this.ageRef}/>
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
