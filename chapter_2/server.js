// The address of this servers connected to the network is: 
// URL -->   http://localhost:8383
// IP --> 127.0.0.1:8383
const express = require('express'); // requires Express and store it in to variable
const app = express(); //define backend application and invoke Express as a Function
const PORT = 8383; //define port, 4-digit number typically

let data = {
    name: "james"
}

// HTTP VERBS (method) && ROUTES (or paths)
// The method informs the nature of requests and the route is a further subdirectory basically (we direct the requets to the body to respond
// appropriately, and these locations or routes are called endpoints

// Type 1 - website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in a browser)

app.get('/', (req, res) => {
    //this is endpointns number 1 - /
    res.send('<h1>homepage</h1>');
});

app.get('/dashboard', (req, res) => {
    res.send('<h1>dashboard</h1>');
});


// Type 2 - API endpoints (non visual)

app.get('/api/data', (req, res) => {
    console.log("This one was for data");
    res.send(data);
});


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)); //listens the incoming request