const express = require('express');
const app = express();

const path= require('path');
const methodOverride = require('method-override');


app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true}))

const cookieParser = require('cookie-parser')
app.use(cookieParser());

app.use(methodOverride((request, response) => {
    if (request.body && request.body._method) {
        const method = request.body._method;
        return method;
    }
}))


const logger = require('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', 'views');


const PORT = 5000;
const HOST = "localhost";

app.listen(PORT, HOST, () => {
    console.log(`The server is listening at ${HOST}: ${PORT}`); 
 })