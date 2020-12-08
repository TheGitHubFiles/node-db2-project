const db = require('../data/dbConfig')

function getAll() {
    return db('cars')
}
function insert(car) {
    return db('cars').insert(car)
}



module.exports = {
    getAll,
    insert
}