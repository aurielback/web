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

    let myRequest = new Request("http://localhost:3000/students", config)

    fetch(myRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById('test').innerHTML = JSON.stringify(data);
        })
        
       
}

getDBJson();

