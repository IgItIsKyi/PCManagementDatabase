
// initializing access to the server
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

// requesting data from server 
app.get('/', (req, res) => {

    //Set home file to show on weblaunch
    res.sendFile('./views/home.html', {root: __dirname });

});

// Run server on said local host port set by env folder or auto start at 3000
app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))