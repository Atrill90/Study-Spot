const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.post("/spots", spotsController.create);