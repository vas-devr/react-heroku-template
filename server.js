const express = require('express');
//use below for customizing favicon
//replace favicon under public favicon with custom image 
const favicon = require('express-favicon');
const path = require('path');

//use env port
const port = process.env.PORT || 3000;

const app = express();

//path to favicon in build folder
app.use(favicon(__dirname,'/build/favicon.ico'))

//static resource directory
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname,'build')));

//redirect unmapped requests to index.html in build folder
app.get('*',function(req,res){
    res.sendFile(path.joing(__dirname,'build','index.html'));
});
