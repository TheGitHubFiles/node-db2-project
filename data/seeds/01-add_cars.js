
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { make: 'Toyota', model: 'Highlander', mileage: 1599334, VIN: 0893240843, transmissionType: 'Automatic', titleStatus: 'Clean' },
        { make: 'BMW', model: 'i8', mileage: 3000, VIN: 034332342143, transmissionType: 'Electric', titleStatus: 'Clean' },
        { make: 'Ford', model: 'Mustang', mileage: 234342, VIN: 46512384, transmissionType: 'Manual', titleStatus: 'Salvaged' }
      ]);
    });
};
