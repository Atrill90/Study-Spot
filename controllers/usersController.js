const mongoose = require("mongoose");


const User = mongoose.model('users');


module.exports = {
    create: function(req, res) {
        // res.json(req.body)


        console.log(`Hi i'm in the controller ${res}`);
        User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));

}
}