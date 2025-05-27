// The address of this servers connected to the network is: 
// URL -->   http://localhost:8383
// IP --> 127.0.0.1:8383
const express = require('express'); // requires Express and store it in to variable
const app = express(); //define backend application and invoke Express as a Function
const PORT = 8383; //define port, 4-digit number typically

let data = ['james'];

// middleware (makes app to expect JSON-data (very important!!) )
app.use(express.json());

// HTTP VERBS (method) && ROUTES (or paths)
// The method informs the nature of requests and the route is a further subdirectory basically (we direct the requets to the body to respond
// appropriately, and these locations or routes are called endpoints

// Type 1 - website endpoints (these endpoints are for sending back html and they typically come when a user enters a url in a browser)

app.get('/', (req, res) => {
    //this is endpointns number 1 - /
    res.send(`
        <body style="background:pink;
        color:blue;">
        <h1>DATA:</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">Dashboard</a>
        </body>
        `);
});

app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
        <h1>dashboard</h1>
        <a href="/">Home</a>
        </body>
        `);
});


// Type 2 - API endpoints (non visual)

//CRUD-method - create=post, read=get, update=put and delete=delete

app.get('/api/data', (req, res) => {
    console.log("This one was for data");
    res.status(599).send(data);
});

app.post('/api/data', (req, res) =>{
   // someone wants to create a user (for example when they click a sign up button)
   // the user clicks the sign up button after entering their credentials, and their browser is wired up to send out a network to the server to handle that action
    const newEntry = req.body;
    console.log(newEntry);
    data.push(newEntry.name);
    res.sendStatus(201);
});

app.delete('/api/data', (req, res) => {
    data.pop();
    console.log("We deleted the element off the end of the array");
    res.sendStatus(203);
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)); //listens the incoming request