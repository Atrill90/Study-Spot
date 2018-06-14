const router = require("express").Router();
const usersController = require("../controllers/usersController");
const passport = require("passport")

router.post("/auth/users/register", usersController.create);

router.post("/auth/users/login",usersController.login)  //put passport authenticate local back in the middle after 

// router.get("auth/users/logout", usersController.logout)

module.exports = router;