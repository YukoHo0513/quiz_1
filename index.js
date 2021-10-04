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

app.use((request, response, next) => {
    const username = request.cookies.username;
    response.locals.username = "";
    if(username){
        response.locals.username = username;
        console.log(`Signed in as ${username}`);
    }
    next();
})

app.get('/', (request, response) => {
    response.render('sign_in')
})

app.post('/sign_in', (request, response) => {
    const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24;
    const username = request.body.username;
    response.cookie('username', username, {maxAge: COOKIE_MAX_AGE});
    response.redirect('/');
})
app.post('/sign_out', (request, response) => {
    response.clearCookie('username');
    response.redirect('/');
})


const logger = require('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', 'views');


const PORT = 5000;
const HOST = "localhost";

app.listen(PORT, HOST, () => {
    console.log(`The server is listening at ${HOST}: ${PORT}`); 
 })