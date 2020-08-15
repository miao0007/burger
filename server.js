// 'use strict';
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

// Serve static content 
app.use(express.static("public"));
// parse application body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set handlebars
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give access to server
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start server by listening client request
app.listen(PORT, ()=>{
    console.log(`Server start listening on: http://localhost:${PORT}`);
});
