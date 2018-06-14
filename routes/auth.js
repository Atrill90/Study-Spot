const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.post("/users/register", usersController.create);

// router.post("/users/login", passport.authenticate("local"),usersController.login)

// router.get("/users/logout", usersController.logout)

module.exports = router;