
export async function uploadData(name , age) {
    const formData = new FormData();

    formData.append('name' , name);
    formData.append('age' , age);

    return fetch('/api/peoples' , {
        method: 'POST' ,
        body: formData
    }).then(r => r.json())
        .catch(e => console.log(e));
}

export async function getData(pattern = '', min = 0, max = 110) {
    const formData  = new FormData();

    formData.append('pattern', pattern);
    formData.append('min', min.toString());
    formData.append('max', max.toString());

    return fetch('/api/get-peoples', {
        method: 'POST',
        body: formData
    }).then(r => r.json())
        .catch(e => console.log(e));
}

export async function deleteMan(id,  {pattern, min, max}) {

    const formData = new FormData();

    formData.append('pattern', pattern);
    formData.append('min', min.toString());
    formData.append('max', max.toString());

    return fetch('/api/peoples/' + id, {
        method: 'DELETE',
        body: formData
    }).catch(e => console.log(e));
}

export async function updateMan(id, name, age, {pattern, min, max}) {
    const formData = new FormData();

    formData.append('id' , id);
    formData.append('name' , name);
    formData.append('age' , age);


    formData.append('pattern', pattern);
    formData.append('min', min.toString());
    formData.append('max', max.toString());

    return fetch('/api/peoples' , {
        method: 'PUT',
        body: formData
    }).then(r => r.json())
        .catch(e => console.log(e));
}
