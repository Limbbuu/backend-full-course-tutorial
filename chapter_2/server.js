const express = require('express'); // requires Express and store it in to variable
const app = express(); //define backend application and invoke Express as a Function
const PORT = 8383; //define port, 4-digit number typically

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`)); //listens the incoming request