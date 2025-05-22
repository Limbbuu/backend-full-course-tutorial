// The address of this servers connected to the network is: 
// URL -->   http://localhost:8383
// IP --> 127.0.0.1:8383
const express = require('express'); // requires Express and store it in to variable
const app = express(); //define backend application and invoke Express as a Function
const PORT = 8383; //define port, 4-digit number typically


// HTTP VERBS && ROUTES (or paths)
// The method informs the nature of requests and the route is a further subdirectory basically (we direct the requets to the body to respond
// appropriately, and these locations or routes are called endpoints
    
app.get('/', (req, res) => {
    //this is endpointns number 1 - /
    console.log("Yay, I hit the endpoint!", req.method);
    res.sendStatus(200);
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)); //listens the incoming request