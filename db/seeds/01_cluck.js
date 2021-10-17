const faker = require('faker');
exports.seed = function(knex) {
    return knex('clucks').del()
    .then(function () {
        const clucks = [];
        for (let i = 0; i < 100; i++) {
            clucks.push({
                username: faker.name.firstName(),
                imageUrl: faker.image.imageUrl(),
                content: faker.company.catchPhrase()
            })
        }
        return knex('clucks').insert(clucks)
    })
}