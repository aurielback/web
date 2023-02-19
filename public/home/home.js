async function getTibiaItems() {
    const response = await fetch('/tibiaitem');
    const data = await response.json();
    console.log(data);
}

//db json
async function getDBJson() {
    const config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default'
    };

    let myRequest = new Request("http://localhost:3000/products", config)

    fetch(myRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.forEach(element => {
                const markup = `<li>${JSON.stringify(element)}</li>`;
                document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
            });
        })
}

getDBJson();

