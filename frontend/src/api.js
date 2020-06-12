
export async function uploadData(name , age) {
    const formData = new FormData();

    formData.append('name' , name);
    formData.append('age' , age);

    return fetch('/api/save' , {
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

    return fetch('/api/people-list', {
        method: 'POST',
        body: formData
    }).then(r => r.json())
        .catch(e => console.log(e));
}
