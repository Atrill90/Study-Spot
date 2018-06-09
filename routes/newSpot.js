const router = require("express").Router();
const spotsController = require("../controllers/spotsController");

router.post("/api/spots", spotsController.create);

router.get("/api/spots",spotsController.read);

module.exports = router;