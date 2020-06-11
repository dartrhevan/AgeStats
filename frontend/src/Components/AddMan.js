import React from "react";
import { uploadData } from '../api'

const upload = () =>
        uploadData(document.getElementById('name'), document.getElementById('age'));

export default function AddMan() {
    return (<div className='content'>
        <h2>Add data</h2>
        Name: <input id='name'/>
        Age: <input type='number' id='age'/>
        <button className='link' onClick={upload}>Upload</button>
    </div>);
}
