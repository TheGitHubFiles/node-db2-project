
exports.up = function (knex) {
    return knex.schema.createTable('cars', table => {
        table.decimal('Vin').unique().notNullable();
        table.text('make', 128).notNullable();
        table.text('model', 128).notNullable();
        table.text('transmissionType', 128);
        table.text('titleStatus', 128);
        table.decimal('mileage').notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
