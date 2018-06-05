const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.post("/users/register", usersController.create);

router.get("/users/login", usersController.read)

module.exports = router;