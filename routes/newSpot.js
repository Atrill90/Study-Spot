const router = require("express").Router();
const spotsController = require("../controllers/spotsController");

router.post("/spots", spotsController.create);

module.exports = router;