const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.post("/users/register", usersController.create);

router.post("/users/login", usersController.read)
module.exports = router;