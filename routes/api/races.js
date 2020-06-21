const router = require("express").Router();
const raceController = require("../../controllers/raceController");

router.route("/all").get(raceController.getRaces);

module.exports = router;