const router = require("express").Router();
const usersController = require("../controllers/usersController");


router.post("/users", usersController.create);

module.exports = router;