let seeder = require('mongoose-seeder'),
   data = require('../spots.json');

seeder.seed(data).then(function(dbData) {
    // The database objects are stored in dbData
}).catch(function(err) {
    // handle error
});