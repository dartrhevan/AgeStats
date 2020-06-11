//TODO: implement
export function uploadData(name, age) {
    const formData  = new FormData();

    formData.append('name', name);
    formData.append('age', age);
    return fetch('/api/save', {
        method: 'POST',
        body: formData
    });
}

export function getData({pattern, min, max}) {
    return {"people": [{"name": "Alisa", "age": 27}], "statistics": {"avveredge": 27.0, "dispersion": 0.0, "deviation": 0.0,
            "mode": 27.0}}
}
