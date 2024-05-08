
// initializing access to the server
const express = require('express');
const { readFile } = require('fs');
const app = express();


// requesting data from server 
app.get('/', (request, response) => {
    
    readFile('./home.html', 'utf-8', (err, html) => {

        // send error if webpage is not working properly on server side
        if(err) {
            response.status(500).send('Server not set properly.')
        }

        // Display webpage
        response.send(html);



    })
});

// Run server on said local host port
app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))