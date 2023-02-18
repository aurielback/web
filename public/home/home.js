let costam = document.getElementById('kurdziel');

async function getTibiaItems(){
    const response = await fetch('/tibiaitem');
    const data = await response.json();
    console.log(data);
    costam.innerHTML = JSON.stringify(data);
}

getTibiaItems();