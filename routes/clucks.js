const express = require('express');
const knex = require('../db/client');

const router = express.Router();

router.get('/', (request, response) => {
    response.render('clucks/clucks');
})

router.post('/', (request, response) => {
    knex('clucks')
    .insert({
        username: request.cookies.username,
        content: request.body.content,
        imageUrl: request.body.imageUrl,
    })
    .returning('*')
    .then((data) => {
        response.redirect('/clucks/index')
    })
})

router.get('/index', (request, response) => {
    knex('clucks')
    .orderBy('createdAt', 'desc')
    .then((data) => {
        response.render('clucks/index', {list: data})
    })

})

module.exports = router;