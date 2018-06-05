const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.post("/users/register", usersController.create);

module.exports = router;