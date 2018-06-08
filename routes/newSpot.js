const router = require("express").Router();
const spotsController = require("../controllers/spotsController");

router.post("/spots", spotsController.create);

router.get("/spots",spotsController.read);

module.exports = router;