import React from "react";
import { uploadData } from '../api'

const upload = () =>
        uploadData(document.getElementById('name').value, document.getElementById('age').value)
            .then(r => {
                if(r && r.message)
                    alert(r.message);
                else
                    alert('Successful upload')
            });

export default function AddMan() {
    return (<div className='content'>
        <h2>Add data</h2>
        Name: <input id='name'/>
        Age: <input type='number' id='age'/>
        <button className='link' onClick={upload}>Upload</button>
    </div>);
}
