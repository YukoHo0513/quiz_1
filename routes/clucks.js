const express = require('express');
const knex = require('../db/client');

const router = express.Router();

router.get('/', (request, response) => {
    response.render('clucks/clucks');
})

router.post('/', (request, response) => {
    knex('clucks')
    .insert({
        username: username,
        content: request.body.content,
        imageUrl: request.body.imageUrl,
    })
    .returning('*')
    .then((data) => {
        response.redirect('/clucks/index')
    })
})

// router.get('/clucks/index', (request, response) => {
//     knex('clucks')
//     .orderBy('createdAt')

// })

module.exports = router;