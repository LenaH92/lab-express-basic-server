// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express');
const morgan = require('morgan')

// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express()


// MIDDLEWARE
// Here you should set up the required middleware:

// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"));

// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json()); // Ayuda a entender datos JSON enviados por el cliente.

// - `morgan` logger to log all incoming requests
app.use(morgan("dev")); //Muestra en consola quién visitó tu servidor y qué hizo.


// ROUTES
// Start defining your routes here:

/* home route */
app.get('/', (request, response) => {
    console.log(request)
    response.sendFile(__dirname + "/views/home.html")
})

/* blog route */

app.get('/blog', (request, response) => {
    console.log(request)
    response.sendFile(__dirname + "/views/blog.html")
})


// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
    console.log("Server on port 5005, listening?");
})