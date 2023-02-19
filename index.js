const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Shop app listening on port http://localhost:${port}`)
  })


  app.get('/tibiaitem', async(request, response) => {
    const fetchApi = await fetch(
      'https://tibia-items.p.rapidapi.com/tibia-item/single?NameItem=Sliver&World=Bona', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '33f618780emshb6243e0e2d65e03p128dedjsn81fb2a7160b9',
          'X-RapidAPI-Host': 'tibia-items.p.rapidapi.com'
        }
      });

      const tibiaItemResponse = await fetchApi.json();
      console.log(tibiaItemResponse);
      response.json(tibiaItemResponse);
  });





